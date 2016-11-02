<?php
    require_once("signal.class.php");
	require_once("exception.class.php");
    include("rds.php");

    class auth
    {
        public static function login($username, $password) { 
			return self::run(function() use ($username, $password) {
				return auth::REAL_login($username, $password);
			});
		}
        public static function start_register($email) {
			return self::run(function() use ($username, $password) {
				return auth::start_real_register($username, $password);
			});
		}
        public static function register($username, $password) {
			return self::run(function() use ($username, $password) {
				return auth::REAL_register($username, $password);
			});
		}


        /*
			Private methods

			All functions are ran through the run() method
			This ensures consistent error handling

		*/

		private static function run($function) {
			try {
				return $function();
			} catch(DBConnectException $e) {
				return Signal::dbConnectionError();
			} catch(AuthException $e) {
				return Signal::authError();
			} catch(IMGException $e) {
				return Signal::imgError()->setMessage($e->getMessage());
			} catch(Exception $e) {
				return Signal::error()->setMessage($e->getMessage());
			}
		}

        private static function getConnection() {
			include("rds.php");
			$db = new mysqli($dbhost, $username, $password, $dbname);

			if($db->connect_error)
				throw new DBConnectException();

			return $db;
		}

        private static function hash($value) {
			return hash("sha256", $value);
            //return $value;
		}

		private static function hashPass($pass, $salt) {
			return self::hash($pass.$salt);
            //return $pass;
		}

        /*
			Helper functions that interface with the database
		*/

		private static function authSetup($db, $authcode) {
			//Get userid from auth
			$stmt = $db->prepare("SELECT userid FROM auth WHERE authcode=? AND NOW() < expire");
			$stmt->bind_param('s', $authcode);
			$stmt->execute();
			$res = $stmt->get_result();
			$stmt->close();

			if($res->num_rows != 1)
				throw new AuthException();

			$userid = $res->fetch_assoc()['userid'];

			//Update authcode expiration
			self::updateAuthExpiration($db, $userid);
			return $userid;
		}

		private static function updateAuthExpiration($db, $userid) {
			$db->query("UPDATE auth SET expire=DATE_ADD(NOW(), INTERVAL 1 MONTH) WHERE userid=$userid");
		}

		//Creates a JSON array out of multiple results
		private static function formatArrayResults($res) {
			//Format results
			$rows = array();
			while($r = $res->fetch_assoc()) {
				$rows[] = $r;
			}
			return Signal::success()->setData($rows);
		}

        /*
            Actions
        */

        private static function REAL_login($username, $password) {
			$db = self::getConnection();

			//Fetch salt + check if user exists
			$stmt = $db->prepare('SELECT username, salt FROM users WHERE username=?');
			$stmt->bind_param('s', $username);
			$stmt->execute();
			$res = $stmt->get_result();
			$stmt->close();

			//User found (note same error)
			if($res->num_rows != 1)
				throw new Exception("Invalid credentials error");

			$row = $res->fetch_assoc();
			$username = $row['username']; //username is safe now: no risk of sql injection
			$salt = $row['salt'];

			//Salt password
			$hshpass = self::hashPass($password, $salt); //hshpass also safe, no sql injection in a hash
			$res = $db->query("SELECT userid FROM users WHERE username='$username' AND password='$hshpass'");

			//Authentication
			if($res->num_rows != 1)
				throw new Exception("Invalid credentials error");
			$userid = $res->fetch_assoc()["userid"];

			//Check if user in auth table
			$res = $db->query("SELECT authcode FROM auth WHERE userid=$userid");

			/*//Generate a random authcode
			$random = openssl_random_pseudo_bytes(64);
			$authcode = self::hash($random);

			if($res->num_rows >= 1) {
				$authcode = $res->fetch_assoc()['authcode'];
			} else {
				//Set temporary expiration date and then update
				$db->query("INSERT INTO auth VALUES (null, $userid, '$authcode', NOW() )");
			}
			self::updateAuthExpiration($db, $userid);

			//Return success with data
			$data = array("authcode" => $authcode);
			return Signal::success()->setData($data);*/
			return Signal::success()->setData($userid);
		}

        private static function REAL_register($username, $password) {
			$db = self::getConnection();

			//Verify basic UN + Pass checks
			//UN >= 4 chars, Pass >= 8 chars
			if(strlen($username) < 5 || strlen($password) < 8)
				throw new Exception("Parameter length error");

			//Check if user exists
			$stmt = $db->prepare('SELECT userid FROM users WHERE username=?');
			$stmt->bind_param('s', $username);
			$stmt->execute();
			$res = $stmt->get_result();
			if($res->num_rows > 0)
				throw new Exception("Username already taken");
			$stmt->close();

			//Process password: generate salt and hash pwd + salt
			$random = openssl_random_pseudo_bytes(64);
			$salt = self::hash($random);
			$hshpass = self::hashPass($password, $salt);

			//Insert user into database
			$stmt = $db->prepare('INSERT INTO users VALUES (null, ?, ?, ?)');
			$stmt->bind_param('sss', $username, $hshpass, $salt);
			$stmt->execute();
			$stmt->close();
			return Signal::success();
		}

         private static function start_real_register($username, $password) {
			$db = self::getConnection();

			//Verify basic UN + Pass checks
			//UN >= 4 chars, Pass >= 8 chars
			if(strlen($username) < 5 || strlen($password) < 8)
				throw new Exception("Parameter length error");

			//Check if user exists
			$stmt = $db->prepare('SELECT userid FROM users WHERE username=?');
			$stmt->bind_param('s', $username);
			$stmt->execute();
			$res = $stmt->get_result();
			if($res->num_rows > 0)
				throw new Exception("Username already taken");
			$stmt->close();

			//Process password: generate salt and hash pwd + salt
			$random = openssl_random_pseudo_bytes(64);
			$salt = self::hash($random);
			$hshpass = self::hashPass($password, $salt);

			//Insert user into database
			$stmt = $db->prepare('INSERT INTO setupusers VALUES (null, ?, ?, ?)');
			$stmt->bind_param('sss', $username, $salt);
			$stmt->execute();
			$stmt->close();
            
            self::sendmail_register($username, $salt);

			return Signal::success();
		}
        private static function sendmail_register($username, $key)
        {
            sendmail($username, 'Amazon SES test (SMTP interface accessed using PHP)', 'This email was sent through the Amazon SES SMTP interface by using PHP.');
        }
        
        private static function GET_verify($db, $userid) {
			//If userid exists, it means that authcode is valid already
			return Signal::success();
		}

		private static function GET_info($db, $userid) {
			//Username
			$res = $db->query("SELECT username FROM users WHERE userid=$userid");
			$username = $res->fetch_assoc()["username"];

			//Data
			$data = array("username" => $username);
			return Signal::success()->setData($data);
		}

        private static function GET_logout($db, $userid) {
			//Remove authcode from table
			$db->query("DELETE FROM auth WHERE userid=$userid");
			return Signal::success();
		}

        /*
            Other helper functions
        */

        private static function sendmail($to, $subject, $body){
            // Replace sender@example.com with your "From" address. 
            // This address must be verified with Amazon SES.
            define('SENDER', getenv('msfemail'));        

            // Replace recipient@example.com with a "To" address. If your account 
            // is still in the sandbox, this address must be verified.
            define('RECIPIENT', $to);  

            // Replace smtp_username with your Amazon SES SMTP user name.
            define('USERNAME', getenv('ses_user'));  

            // Replace smtp_password with your Amazon SES SMTP password.
            define('PASSWORD', getenv('ses_password'));  

            // If you're using Amazon SES in a region other than US East (Virginia), 
            // replace email-smtp.us-east-1.amazonaws.com with the Amazon SES SMTP  
            // endpoint in the appropriate region.
            define('HOST', 'email-smtp.us-east-1.amazonaws.com');  

            // The port you will connect to on the Amazon SES SMTP endpoint.
            define('PORT', '587');     

            // Other message information                                               
            define('SUBJECT', $subject);
            define('BODY', $body);

            require_once 'Mail.php';

            $headers = array (
                'From' => SENDER,
                'To' => RECIPIENT,
                'Subject' => SUBJECT
            );

            $smtpParams = array (
                'host' => HOST,
                'port' => PORT,
                'auth' => true,
                'username' => USERNAME,
                'password' => PASSWORD
            );

            // Create an SMTP client.
            $mail = Mail::factory('smtp', $smtpParams);

            // Send the email.
            $result = $mail->send(RECIPIENT, $headers, BODY);

            if (PEAR::isError($result)) {
                echo("Email not sent. " .$result->getMessage() ."\n");
            } else {
                echo("Email sent!"."\n");
            }
        }
        
    }
?>