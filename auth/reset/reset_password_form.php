<?php echo '
<form action="reset.php" method="POST">
<head>
	<meta charset="UTF-8">
	<title>MHS Alum DB - Forgot Password</title>
	<link rel="stylesheet" href="/css/jquery-ui.css">
	<link rel="stylesheet" href="/css/style.css" media="screen" type="text/css" />
	<link rel="shortcut icon" href="/favicon.ico" />
	</head>
<body>
	<div class="card">
		<img src="/img/msf.png"><br>
		E-mail Address: <input type="text" name="email" size="20" /><br />
		New Password: <input type="password" name="password" size="20" /><br />
		Confirm Password: <input type="password" name="confirmpassword" size="20" /><br />
		<input type="hidden" name="q" value="';
		if (isset($_GET["q"])) {
			echo $_GET["q"];
		}
			echo '" /><input type="submit" name="ResetPasswordForm" value=" Reset Password " />
			<div class="help">
			<a href="../login/">Log In</a> • <a href="../register/">Register</a>
		</div>
    </div>
    <script src="/js/jquery_and_jqueryui.js"></script>
</form>';
?>

<html>
	<!-- A Pen created at CodePen.io. You can find this one at http://codepen.io/Mongeed/pen/IuBLt. -->
	<!-- A simple log-in screen I pretty much made out of boredom. Style is based on google's login which is one of my favorite login's. Tried to keep it minimalistic, I think it worked. -->
</html>