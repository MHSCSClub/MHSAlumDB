<?php 
ini_set('display_errors', 1);
include("../../php/auth.php");

if (isset($_GET["q"])) {
	echo $_GET["q"];
	$db = auth::getConnection();

	//Make database call to see if pw token is valid
	/*$password_hash=$_GET["q"];
	$squery = $db->prepare('SELECT userid FROM users WHERE password_reset_hash = ? AND reset_expiration_timestamp <= NOW() AND is_password_reset_active = 1');
	$squery->bind_param('s', $password_hash);
	$squery->execute();
	*/
	if (isset($_POST["ResetPasswordForm"]))
	{
		// Gather the post data
		$email = $_POST["email"];
		$password = $_POST["password"];
		$confirmpassword = $_POST["confirmpassword"];
		$hash = $_POST["q"];
	
		// Use the same salt from the forgot_password.php file
		$salt = "498#2D83B631%3800EBD!801600D*7E3CC13";
	
		// Generate the reset key
		$resetkey = hash('sha512', $salt.$email);
	
		// Does the new reset key match the old one?
		if ($resetkey == $hash)
		{
			if ($password == $confirmpassword)
			{
				//has and secure the password
				$password = hash('sha512', $salt.$password);
	
				// Update the user's password
					$query = $db->prepare('UPDATE users SET password = :password WHERE email = :email');
					$query->bindParam(':password', $password);
					$query->bindParam(':email', $email);
					$query->execute();
					$db = null;
				echo "Your password has been successfully reset.";
			}
			else
				echo "Your password's do not match.";
		}
		else
			echo "Your password reset key is invalid.";
	}

}


//If not valid then redirect to have password email send again


//If valid then display password reset form

?>

//check to see if valid email, otherwise redirect to page, make sure form displays, submit to page to update password, 