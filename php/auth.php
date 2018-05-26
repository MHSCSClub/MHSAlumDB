<?php
	ini_set('display_errors', 1);
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
		public static function adminlogin($username, $password) { 
			return self::run(function() use ($username, $password) {
				return auth::REAL_adminlogin($username, $password);
			});
		}
        public static function start_register($email, $firstname, $lastname, $gyear) {
			return self::run(function() use ($email, $firstname, $lastname, $gyear) {
				return auth::start_real_register($email, $firstname, $lastname, $gyear);
			});
		}
        public static function register($username, $password, $key) {
			return self::run(function() use ($username, $password, $key) {
				return auth::REAL_register($username, $password, $key);
			});
		}
		public static function start_reset($username) {
			return self::run(function() use ($username) {
				return auth::start_real_reset($username);
			});
		}
		public static function reset($username, $key) {
			return self::run(function() use ($username, $key) {
				return auth::REAL_reset($username, $key);
			});
		}

		public static function check_auth($authcode) {
			return self::run(function() use ($authcode) {
				return auth::GET_verify($authcode);
			});
		}
		
		public static function logout($authcode) {
			return self::run(function() use ($authcode) {
				return auth::GET_logout($authcode);
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

        public static function getConnection() {
			$dbhost = $_SERVER['RDS_HOSTNAME'];
			$dbport = $_SERVER['RDS_PORT'];
			$dbname = "alumni";
		
			$username = $_SERVER['RDS_USERNAME'];
			$password = $_SERVER['RDS_PASSWORD'];
			$db = new mysqli($dbhost, $username, $password, $dbname);

			if($db->connect_errno){
				throw new DBConnectException($db->connect_error);
			}
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
			return strtotime("+1 month", time()); 
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

			$username = mysqli_real_escape_string($db, $username);
			$password = mysqli_real_escape_string($db, $password);
			
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

			//Generate a random authcode
			$random = openssl_random_pseudo_bytes(256);
			$authcode = self::hash($random);

			if($res->num_rows >= 1) {
				$authcode = $res->fetch_assoc()['authcode'];
			} else {
				//Set temporary expiration date and then update
				$db->query("INSERT INTO auth VALUES (null, $userid, '$authcode', NOW() )");
			}
			$expire = self::updateAuthExpiration($db, $userid);

			//Return success with data
			$data = array("authcode" => $authcode, "expire" => $expire);
			return Signal::success()->setData($data);
			//return Signal::success()->setData($userid);
		}

		//make changes here
		private static function REAL_adminlogin($username, $password) {
			$db = self::getConnection();

			$username = mysqli_real_escape_string($db, $username);
			$password = mysqli_real_escape_string($db, $password);
			
			//Fetch salt + check if user exists
			$stmt = $db->prepare('SELECT username, salt FROM admin WHERE username=?');
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
			$res = $db->query("SELECT userid FROM admin WHERE username='$username' AND password='$hshpass'");
			//here


			//Authentication
			if($res->num_rows != 1)
				throw new Exception("Invalid credentials error");
			$userid = $res->fetch_assoc()["userid"];

			//Check if user in auth table
			$res = $db->query("SELECT authcode FROM auth WHERE userid=$userid");

			//Generate a random authcode
			$random = openssl_random_pseudo_bytes(256);
			$authcode = self::hash($random);

			if($res->num_rows >= 1) {
				$authcode = $res->fetch_assoc()['authcode'];
			} else {
				//Set temporary expiration date and then update
				$db->query("INSERT INTO auth VALUES (null, $userid, '$authcode', NOW() )");
			}
			$expire = self::updateAuthExpiration($db, $userid);

			//Return success with data
			$data = array("authcode" => $authcode, "expire" => $expire);
			return Signal::success()->setData($data);
			//return Signal::success()->setData($userid);
		}

        private static function REAL_register($username, $password, $key) {
			$db = self::getConnection();

			$username = mysqli_real_escape_string($db, $username);
			$password = mysqli_real_escape_string($db, $password);

			//Verify basic UN + Pass checks
			//Pass >= 8 chars
			if(strlen($password) < 8)
				throw new Exception("Password does not meet minimum length requirement (8)");

			//Check if user exists
			$stmt = $db->prepare("SELECT * FROM setupusers WHERE username=? AND authkey=?");
			$stmt->bind_param('ss', $username, $key);
			$stmt->execute();
			$res = $stmt->get_result();
			if($res->num_rows == 0){
				throw new Exception("Invalid registration key");
			}
			$stmt->close();

			//Process password: generate salt and hash pwd + salt
			$random = openssl_random_pseudo_bytes(256);
			$salt = self::hash($random);
			$hshpass = self::hashPass($password, $salt);

			//Insert user into database
			$stmt = $db->prepare('INSERT INTO users (username, password, salt) VALUES (?, ?, ?)');
			$stmt->bind_param('sss', $username, $hshpass, $salt);
			$stmt->execute();
			$stmt->close();

			

			$stmt = $db->prepare("DELETE FROM setupusers WHERE username=? AND authkey=?");
			$stmt->bind_param('ss', $username, $key);
			$stmt->execute();

			//stuff to do
			/*
			update user ID based off selection from db table, or if non-existent, create new ID over 29000.	
			
			if(user==null){
				
			}
			
			
			
			
			*/
			

			return Signal::success();
		}

		private static function REAL_reset($username, $password, $key) {
			$db = self::getConnection();

			$username = mysqli_real_escape_string($db, $username);
			$password = mysqli_real_escape_string($db, $password);

			//Verify basic UN + Pass checks
			//Pass >= 8 chars
			if(strlen($password) < 8)
				throw new Exception("Password does not meet minimum length requirement (8)");

			//Check if user exists
			$stmt = $db->prepare("SELECT * FROM users WHERE username=? AND resetkey=?");
			$stmt->bind_param('ss', $username, $key);
			$stmt->execute();
			$res = $stmt->get_result();
			if($res->num_rows == 0){
				throw new Exception("Invalid registration key");
			}
			$stmt->close();

			$stmt = $db->prepare("SELECT salt FROM users WHERE username=? AND resetkey=?");
			$stmt->bind_param('ss', $username, $key);
			$stmt->execute();
			$res = $stmt->get_result();
			$row = $res->fetch_assoc();
			$salt = $row["salt"];

			$hshpass = self::hashPass($password, $salt);

			//Insert user into database
			$stmt = $db->prepare('UPDATE users SET password = ? WHERE username=? AND resetkey=?');
			$stmt->bind_param('sss', $hshpass, $username, $key);
			$stmt->execute();
			$stmt->close();
			

			return Signal::success();
		}

         private static function start_real_register($email, $firstname, $lastname, $gyear) {
			$db = self::getConnection();

			//Check if email is valid
			
			if(strlen($email) < 5 || !filter_var($email, FILTER_VALIDATE_EMAIL)){
				throw new Exception("Email is invalid (too short or not an email address)");
			}

			$email = mysqli_real_escape_string($db,$email);

			//Check if user exists
			$stmt = $db->prepare('SELECT userid FROM users WHERE username=?');
			$stmt->bind_param('s', $email);
			$stmt->execute();
			$res = $stmt->get_result();
			if($res->num_rows > 0)
				throw new Exception("You have already registered. Please login or reset your password.");
			$stmt->close();
			



			//Process password: generate salt and hash pwd + salt
			$random = openssl_random_pseudo_bytes(256);
			$key = self::hash($random);

			//Insert user into database
			$stmt = $db->prepare("INSERT INTO setupusers (username, firstname, lastname, graduationyear, authkey) VALUES (?, ?, ?, ?, ?) ON DUPLICATE KEY UPDATE authkey = ?");
			$stmt->bind_param('ssssss', $email, $firstname, $lastname, $gyear, $key, $key);
			$stmt->execute();
			$stmt->close();
            
            //self::sendmail_register($email, $key); to be placed in admin function

			return Signal::success();
		}
		
		private static function start_real_reset($username) {
			$db = self::getConnection();

			//Check if email is valid
			
			if(strlen($username) < 5 || !filter_var($username, FILTER_VALIDATE_EMAIL)){
				throw new Exception("Email is invalid (too short or not an email address)");
			}
			
			$username = mysqli_real_escape_string($db,$username);
			//Check if user exists
			$stmt = $db->prepare('SELECT userid FROM users WHERE username=?');
			$stmt->bind_param('s', $username);
			$stmt->execute();
			$res = $stmt->get_result();
			if($res->num_rows == 0)
				throw new Exception("You do not exist in the database");
			$stmt->close();
			
			//Generate reset key
			$random = openssl_random_pseudo_bytes(256);
			$key = self::hash($random);

			//UPDATE reset key
			$stmt = $db->prepare('UPDATE users SET resetkey = ?, reset_expiration_timestamp = NOW() + INTERVAL 1 DAY, is_password_reset_active = 1');
			$stmt->bind_param('s', $key);
			$stmt->execute();
			$stmt->close();
            
            self::sendmail_reset($username, $key); 

			return Signal::success();
		}

		public static function sendmail_reset($username, $key)
        {
			$base_url =  "https://{$_SERVER['HTTP_HOST']}/auth/reset";

			$escaped_base_url = htmlspecialchars( $base_url, ENT_QUOTES, 'UTF-8' );
			
			$full_url = $escaped_base_url . "?email={$username}&key={$key}";
			$SUBJECT = 'Reset confirmation for MHS Alumni Database';
			$BODY = "Thank you for resetting your password! To finish setting up your account, please click this link or copy and paste it into your browser {$full_url}";
            self::sendmail($username, $SUBJECT, $BODY);
        }



        public static function sendmail_register($username, $key)
        {
			$base_url =  "https://{$_SERVER['HTTP_HOST']}/auth/register";

			$escaped_base_url = htmlspecialchars( $base_url, ENT_QUOTES, 'UTF-8' );
			
			$full_url = $escaped_base_url . "?email={$username}&key={$key}";
			$SUBJECT = 'Registration confirmation for MHS Alumni Database';
			$BODY = "Thank you for registering for the MHS Alumni Database! To finish setting up your account, please click this link or copy and paste it into your browser {$full_url}";
            self::sendmail($username, $SUBJECT, $BODY);
        }
        
        private static function GET_verify($authcode) {
			$db = self::getConnection();
			$authcode = mysqli_real_escape_string($db, $authcode);

			$smst = $db->prepare("SELECT expire FROM auth WHERE authcode=?");
			$smst->bind_param('s',$authcode);
			$smst->execute();
			$res = $smst->get_result();
			if($res->num_rows > 0){
				$expire = $res->fetch_assoc()["expire"];
				if($expire < time()){
					return Signal::success();
				}
			}
			return Signal::authError();	
		}

		private static function GET_info($db, $userid) {
			

			//Username
			$res = $db->query("SELECT username FROM users WHERE userid=$userid");
			$username = $res->fetch_assoc()["username"];

			//Data
			$data = array("username" => $username);
			return Signal::success()->setData($data);
		}

        private static function GET_logout($authcode) {
			$db = self::getConnection();
			$authcode = mysqli_real_escape_string($db, $authcode);
			
			//Remove authcode from table
			
			$smst = $db->prepare("DELETE FROM auth WHERE authcode=?");
			$smst->bind_param('s',$authcode);
			$smst->execute();
			
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