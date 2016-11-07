<?php

   if($_SERVER["REQUEST_METHOD"] == "POST") {
      include("../../php/signal.class.php");
      include("../../php/auth.php");
      
      session_start();
      // username and password sent from form 
      $resp = auth::login($_POST['username'], $_POST['password']);
      //print(json_encode($resp->toArray()));
      //print(json_encode($resp->getData()));
       if($resp->isError()){
           $error = "Your Username or Password is invalid";
         //replace 
         $e_string = "<div id=\"error\"><img src=\"/img/Delete-icon.png\"/><p>{$error}</p></div>";
         $reghtm = file_get_contents('./login.html', FILE_USE_INCLUDE_PATH);
         die(str_replace("<!-- ERROR -->", $e_string, $reghtm));                    
        } else {
          echo $resp->getData()["expire"];
          echo "\n";
          echo time();
          setcookie("alumdbauth", $resp->getData()["authcode"],0, "/");
          //header("location: /ui/");
        }
   } else {
     readfile("login.html");
   }
 ?>
