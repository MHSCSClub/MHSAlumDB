<?php
    include("../../php/signal.class.php");
    include("../../php/auth.php");
    ini_set('display_errors', 1);
    if($_SERVER["REQUEST_METHOD"] == "POST") {
      if(!(isset($_GET["key"]) || isset($_GET["email"]))){    //Part 2 of register
        session_start();
        $resp = auth::start_register($_POST['email'], $_POST['firstname'], $_POST['lastname'], $_POST['gyear']);
        if($resp->isError()){
          $error = $resp->getMessage();
          //$error = "Username already registered or password does not meet minimum requirements";
          //replace 
          
          $e_string = "<div id=\"error\"><img src=\"/resources/img/Delete-icon.png\" /> {$error}</div>";
          $reghtm = file_get_contents('./register.html', FILE_USE_INCLUDE_PATH);
          die(str_replace("<!-- ERROR -->", $e_string, $reghtm));                    
        } 
        else {
          readfile("register-email.html");
          //header("location: /auth/login/");
        }
      } 
      else {
        session_start();
        if($_POST['password1'] === $_POST['password2']){        //Check if passwords match
            //Call register in auth
            $resp = auth::register($_GET['email'], $_POST['password1'],$_GET["key"]);
            if($resp->isError()){
              $error = $resp->getMessage();
              //$error = "Username already registered or password does not meet minimum requirements";
              //replace 
              $e_string = "<div id=\"error\"><img src=\"/img/Delete-icon.png\" /> {$error}</div>";
              $reghtm = file_get_contents('./register2.html', FILE_USE_INCLUDE_PATH);
              die(str_replace("<!-- ERROR -->", $e_string, $reghtm));                    
            } 
            else {
              $_SESSION['graduationYear'] = $_POST['gyear'];
              header("location: /auth/login/");
            }
        } 
        else {
          $error = "Passwords do not match";
          //replace 
          $e_string = "<div id=\"error\"><img src=\"/img/Delete-icon.png\" /> {$error}</div>";
          $reghtm = file_get_contents('./register2.html', FILE_USE_INCLUDE_PATH);
          die(str_replace("<!-- ERROR -->", $e_string, $reghtm)); 
        }
      }
    } 
    else {
      if($_SERVER["REQUEST_METHOD"] == "GET"){
        if(isset($_GET["email"]) && isset($_GET["key"])){
          $email_form = "<input type=\"text\" name=\"email\" placeholder=\"{$_GET['email']}\" disabled>";
          $reghtm = file_get_contents('./register2.html', FILE_USE_INCLUDE_PATH);
          die(str_replace("<!-- email -->", $email_form, $reghtm));  
        } 
        else {
          readfile("register.html");
        }
      }
   }
 ?>
