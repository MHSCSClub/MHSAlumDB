<?php
ini_set('display_errors', 1);
include("../../php/auth.php");

$db = auth::getConnection();
// Was the form submitted?
if (isset($_POST["ResetPasswordForm"]))
{
	
	// Gather the post data
	$email = $_POST["email"];
	$password = $_POST["password"];
	$confirmpassword = $_POST["confirmpassword"];
	$hash = $_POST["q"];

	// Use the same salt from the forgot_password.php file
	$salt = "486641d0c512a59e49f66b152843481ac4b436dc05aa0ab5e97859df597aecd4";

	// Generate the reset key
	$resetkey = hash('sha512', $salt.$email);

	

	// Does the new reset key match the old one?
	if ($resetkey == $hash)
	{
		if ($password == $confirmpassword)
		{
			//hash and secure the password
			$password = hash('sha256', $password.$salt);

			// Update the user's password
				$query = $db->prepare("UPDATE users SET password = '$password' WHERE username = '$email'"); //update salt
				$query->execute();

				$squery = $db->prepare("UPDATE users SET salt = '$salt' WHERE username = '$email'");
				$squery->execute();
				$db = null;
			echo "Your password has been successfully reset.";
		}
		else
			echo "Your password's do not match.";
	}
	else
		echo "Your password reset key is invalid.";
}
?>
<html>
	<p>Redirecting to login</p>
		<script type="text/javascript">
			t1 = window.setTimeout(function(){ window.location = "/auth/login"; },3000);
		</script>
</html>
