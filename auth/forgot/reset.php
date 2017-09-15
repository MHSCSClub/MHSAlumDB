<?php
ini_set('display_errors', 1);
// Connect to MySQL
    $username = "username"; 
    $password = "password"; 
    $host = "localhost"; 
    $dbname = "databasename"; 

// Was the form submitted?
if (isset($_POST["ForgotPassword"])) {
	
	// Harvest submitted e-mail address
	if (filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {
		$email = $_POST["email"];
		
	}else{
		echo "email is not valid";
		exit;
	}
	auth::reset_password($_POST['email']);	
}
?>