<?php
   if($_SERVER["REQUEST_METHOD"] == "POST") {
      include("../../php/signal.class.php");
      include("../../php/auth.php");
      
      session_start();
      // username sent from form 
      $resp = auth::start_reset($_POST['username']);

      if($resp->isError()){
        $error = $resp->getMessage();
        //replace error placeholder 
        $e_string = "<div id=\"error\"><img src=\"/img/Delete-icon.png\"/><p>{$error}</p></div>";
        $reghtm = file_get_contents('./forgot.html', FILE_USE_INCLUDE_PATH);
        die(str_replace("<!-- ERROR -->", $e_string, $reghtm));                    
      } 
      else {
        readfile("register-email.html");
      }
   } else {
     readfile("login.html");
   }
 ?>