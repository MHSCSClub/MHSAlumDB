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