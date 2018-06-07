<?php
   if($_SERVER["REQUEST_METHOD"] == "POST") {
      include("../../php/signal.class.php");
      include("../../php/auth.php");
      
      session_start();
      // username and password sent from form 
      $resp = auth::login($_POST['username'], $_POST['password']);
      $_SESSION['individual'] = $_POST['username'];
      if($resp->isError()){
        $error = $resp->getMessage();
        //replace error placeholder 
        $e_string = "<div id=\"error\"><img src=\"/img/Delete-icon.png\"/><p>{$error}</p></div>";
        $reghtm = file_get_contents('./login.html', FILE_USE_INCLUDE_PATH);
        die(str_replace("<!-- ERROR -->", $e_string, $reghtm));                    
      } else { //set expire, set cookie with data on authcode
        setcookie("alumdbauth", $resp->getData()["authcode"],$resp->getData()["expire"], "/", $_SERVER['SERVER_NAME'], true);
        header("location: /homepage/");
      }
   } else {
     readfile("login.html");
   }
 ?>