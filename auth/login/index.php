<?php

   if($_SERVER["REQUEST_METHOD"] == "POST") {
      include("../../php/signal.class.php");
      include("../../php/auth.php");
      
      session_start();
      // username and password sent from form 
      //echo("test");

      
      if($_POST['username'] === "admin" and $_POST['password'] === "admin"){
        header("location: /ui/");
        //die('<script type="text/javascript">window.location=\'/dbtest/\';</script‌​>');
      } else {

      //echo ("testtest");
      $resp = auth::login($_POST['username'], $_POST['password']);
      //print(json_encode($resp->toArray()));
      //print(json_encode($resp->getData()));
       if($resp->isError()){
           $error = "Your Username or Password is invalid";
         //replace 
         $e_string = "<div id=\"error\"><img src=\"/img/Delete-icon.png\" /> {$error}</div>";
         $reghtm = file_get_contents('./login.html', FILE_USE_INCLUDE_PATH);
         die(str_replace("<!-- ERROR -->", $e_string, $reghtm));                    
        } else {
          setcookie("alumdbauth", $resp->getData(),0, "/");
          header("location: /ui/");
        }
    
    /*
      if($count == 1) {
         session_register("myusername");
         $_SESSION['login_user'] = $myusername;
         
         header("location: /ui/");
      }else {
         $error = "Your Username or Password is invalid";
         //replace 
         $e_string = "<div id=\"error\"><img src=\"/img/Delete-icon.png\" /> {$error}</div>";
         $loginhtm = file_get_contents('./login.html', FILE_USE_INCLUDE_PATH);
         echo(str_replace("<!-- ERROR -->", $e_string, $loginhtm)); 
      }*/
   }
   } else {
     readfile("login.html");
   }
 ?>
