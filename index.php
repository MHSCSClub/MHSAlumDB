<?php

   if($_SERVER["REQUEST_METHOD"] == "POST") {
     
      include("config.php");
      session_start();
      // username and password sent from form 
      //echo("test");
      $myusername = mysqli_real_escape_string($db,$_POST['username']);
      $mypassword = mysqli_real_escape_string($db,$_POST['password']); 
      
      if($_POST['username'] === "admin" and $_POST['password'] === "admin"){
        header("location: /api/dbtest.php");
        //die('<script type="text/javascript">window.location=\'/dbtest/\';</script‌​>');
      } else {

      $sql = "SELECT id FROM admin WHERE username = '$myusername' and password = '$mypassword'";
      $result = mysqli_query($db,$sql);
      $row = mysqli_fetch_array($result,MYSQLI_ASSOC);
      $active = $row['active'];
      $count = mysqli_num_rows($result);
      
      // If result matched $myusername and $mypassword, table row must be 1 row
		
      if($count == 1) {
         session_register("myusername");
         $_SESSION['login_user'] = $myusername;
         
         header("location: /api/dbtest.php");
      }else {
         $error = "Your Username or Password is invalid";
         //replace 
         $e_string = "<div id=\"error\"><img src=\"/img/Delete-icon.png\" /> {$error}</div>";
         $loginhtm = file_get_contents('./login.html', FILE_USE_INCLUDE_PATH);
         echo(str_replace("<!-- ERROR -->", $e_string, $loginhtm)); 
      }
   }
   } else {
     if($_SERVER["REQUEST_METHOD"] == "GET") {
		 switch($_GET['action']){
			case 'register':
				readfile("register.html");
				break;
			case 'forgot':
				readfile('forgot.html');
				break;
			case 'login':
			default:
			readfile("login.html");
		 }
	 }
   }
 ?>
