<?php
ini_set('display_errors', 1);

// Connect to MySQL
    $username = "username"; 
    $password = "password"; 
    $host = "localhost"; 
    $dbname = "databasename"; 
try {

}
catch(PDOException $ex) 
    { 
        $msg = "Failed to connect to the database"; 
    } 

// Was the form submitted?
if (isset($_POST["ForgotPassword"])) {
	
	$conn = new PDO("mysql:host={$host};dbname={$dbname};charset=utf8", $username, $password);
	// Harvest submitted e-mail address
	if (filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {
		$email = $_POST["email"];
		
	}else{
		echo "email is not valid";
		exit;
	}

	
}
sendmail_reset($email);
?>