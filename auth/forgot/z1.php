<?php
ini_set('display_errors', 1);
include("../../php/auth.php");
	
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
		
		$db = auth::getConnection();
		$query = $db->prepare('SELECT username FROM users WHERE username = ?');
		$query->bind_param('s', $email);
		$query->execute();
		$res = $query->get_result();
		if ($res->num_rows == 1)
		{
			// Create a unique salt. This will never leave PHP unencrypted.
			$salt = "486641d0c512a59e49f66b152843481ac4b436dc05aa0ab5e97859df597aecd4";
			// Create the unique user password reset key
			$password_hash = hash('sha512', $salt.$email);
			// Create a url which we will direct them to reset their password
			$pwrurl = "https://alumdb.mamaroneckschoolsfoundation.org/auth/reset/reset_password_form.php?q=".$password_hash;
			
			$squery = $db->prepare('UPDATE users SET resetkey = ?, reset_expiration_timestamp = NOW() + INTERVAL 1 DAY, is_password_reset_active = 1');
			$squery->bind_param('s', $password_hash);
			$squery->execute();
			// Mail them their key
			$mailbody = "Dear user,\n\nIf this e-mail does not apply to you please ignore it. It appears that you have requested a password reset at our website \n\nTo reset your password, please click the link below. If you cannot click it, please paste it into your web browser's address bar.\n\n" . $pwrurl . "\n\nThanks,\nMamaroneck Schools Foundation";
			mail($email, "alumdb.com - Password Reset", $mailbody);
			echo "Your password recovery key has been sent to your e-mail address.";
		}
		else{
			echo "No user with that e-mail address exists.";
		}
	}
?>
<html>
	<p>Redirecting to login</p>
		<script type="text/javascript">
			t1 = window.setTimeout(function(){ window.location = "/auth/login"; },3000);
		</script>
</html>