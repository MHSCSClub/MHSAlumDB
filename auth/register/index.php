<?php

   if($_SERVER["REQUEST_METHOD"] == "POST") {
      include("../../php/signal.class.php");
      include("../../php/auth.php");
      
      session_start();
      // username and password sent from form 
      //echo("test");

      
      if($_POST['password1'] === $_POST['password2']){
        //echo ("testtest");
      $resp = auth::register($_POST['email'], $_POST['password1']);
      //print(json_encode($resp->toArray()));
      //print(json_encode($resp->getData()));
        if($resp->isError()){
           $error = "Username already registered or password does not meet minimum requirements";
         //replace 
         $e_string = "<div id=\"error\"><img src=\"/img/Delete-icon.png\" /> {$error}</div>";
         $reghtm = file_get_contents('./register2.html', FILE_USE_INCLUDE_PATH);
         die(str_replace("<!-- ERROR -->", $e_string, $reghtm));                    
        } else {
         header("location: /auth/login/");
        }
      
    
    
      
      }else {
         $error = "Passwords do not match";
         //replace 
         $e_string = "<div id=\"error\"><img src=\"/img/Delete-icon.png\" /> {$error}</div>";
         $reghtm = file_get_contents('./register2.html', FILE_USE_INCLUDE_PATH);
         die(str_replace("<!-- ERROR -->", $e_string, $reghtm)); 
      }
   } else {
     readfile("register2.html");
   }
 ?>
