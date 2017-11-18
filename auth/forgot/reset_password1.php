<?php 
ini_set('display_errors', 1);
include("../../php/auth.php");

if (isset($_GET["q"])) {
	echo $_GET["q"];
	$db = auth::getConnection();

	//Make database call to see if pw token is valid
	$password_hash=$_GET["q"];
	$squery = $db->prepare('SELECT userid FROM users WHERE password_reset_hash = ? AND reset_expiration_timestamp <= NOW() AND is_password_reset_active = 1');
	$squery->bind_param('s', $password_hash);
	$squery->execute();

	//displaysform
	if($squery->num_rows==1){
		echo '
		<form action="reset.php" method="POST">
		E-mail Address: <input type="text" name="email" size="20" /><br />
		New Password: <input type="password" name="password" size="20" /><br />
		Confirm Password: <input type="password" name="confirmpassword" size="20" /><br />
		<input type="hidden" name="q" value="';
		
		echo '" /><input type="submit" name="ResetPasswordForm" value=" Reset Password " />
		</form>';
	}
	else{
		header("Location: reset.php?p=expired");
	}

}


//If not valid then redirect to have password email send again


//If valid then display password reset form

?>

//check to see if valid email, otherwise redirect to page, make sure form displays, submit to page to update password, 