
<form action="reset.php" method="POST">
<head>
	<meta charset="UTF-8">
	<title>MHS Alum DB - Forgot Password</title>
	<link rel="stylesheet" href="/css/jquery-ui.css">
	<link rel="stylesheet" href="/css/style.css" media="screen" type="text/css" />
	<link rel="shortcut icon" href="/favicon.ico" />
	<!-- A Pen created at CodePen.io. You can find this one at http://codepen.io/Mongeed/pen/IuBLt. -->
	<!-- A simple log-in screen I pretty much made out of boredom. Style is based on google's login which is one of my favorite login's. Tried to keep it minimalistic, I think it worked. -->
</head>

<body>
	<div class="card">
		<img src="/img/msf.png"><br>
		<form method="post">
			<input type="text" name="email" placeholder="Email Address">
			<input type="submit" name="reset" class="button button-submit" value="Start Password Reset">
		</form>
		<div class="help">
			<a href="../login/">Log In</a> • <a href="../register/">Register</a>
		</div>
		<!-- ERROR -->
	</div>
	<script src="/js/jquery_and_jqueryui.js"></script>



</body>

</form>