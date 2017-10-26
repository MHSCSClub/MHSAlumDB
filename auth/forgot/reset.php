<?php
ini_set('display_errors', 1);
//include("../../php/auth.php");
	

	// Was the form submitted?
	if (isset($_POST["ForgotPassword"])) {
	
		// Harvest submitted e-mail address
		if (filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) 
		{
			$email = $_POST["email"];
		
		}
		else{
			echo "email is not valid";
			exit;
		}
	
	//$db = auth::getConnection();
	$dbhost = $_SERVER['RDS_HOSTNAME'];
	$dbport = $_SERVER['RDS_PORT'];
	$dbname = "alumni";

	$username = $_SERVER['RDS_USERNAME'];
	$password = $_SERVER['RDS_PASSWORD'];
	$db = new mysqli($dbhost, $username, $password, $dbname);
	print $db->connect_error;
	die();
	if($db->connect_errno){
		throw new Exception($db->connect_error);
	}
	// Check to see if a user exists with this e-mail

	$query = $db->prepare('SELECT email FROM users WHERE email = :email');
	$query->bindParam(':email', $email);
	$query->execute();
	$res = $query->get_result();

	if ($res->num_rows == 1)
	{
		// Create a unique salt. This will never leave PHP unencrypted.
		$salt = "498#2D83B631%3800EBD!801600D*7E3CC13";

	// Create the unique user password reset key
	$password_hash = hash('sha512', $salt.$userExists["email"]);

	// Create a url which we will direct them to reset their password
	$pwrurl = "www.yoursitehere.com/reset_password.php?q=".$password_hash;
	
	$squery = $db->prepare('UPDATE users SET password_reset_hash = :password_reset_hash, reset_expiration_timestamp = NOW(), is_password_reset_active = 1');
	$squery->bindParam(':password_reset_hash', $password_hash);
	$squery->execute();



	// Mail them their key
	$mailbody = "Dear user,\n\nIf this e-mail does not apply to you please ignore it. It appears that you have requested a password reset at our website www.yoursitehere.com\n\nTo reset your password, please click the link below. If you cannot click it, please paste it into your web browser's address bar.\n\n" . $pwrurl . "\n\nThanks,\nThe Administration";
	mail($userExists["email"], "www.yoursitehere.com - Password Reset", $mailbody);
	echo "Your password recovery key has been sent to your e-mail address.";

	}
	else
		echo "No user with that e-mail address exists.";
}

?>