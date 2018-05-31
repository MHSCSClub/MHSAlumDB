<?php
   if($_SERVER["REQUEST_METHOD"] == "POST") {
      include("../../php/signal.class.php");
      include("../../php/auth.php");
      //hello
      
      
      session_start();
      // username and password sent from form 
      $resp = auth::adminlogin($_POST['username'], $_POST['password']);
      $_SESSION['individual'] = $_POST['username'];
      //print(json_encode($resp->toArray()));
      //print(json_encode($resp->getData()));
      if($resp->isError()){
        $error = $resp->getMessage();
        //replace error placeholder 
        $e_string = "<div id=\"error\"><img src=\"/img/Delete-icon.png\"/><p>{$error}</p></div>";
        $reghtm = file_get_contents('./adminlogin.html', FILE_USE_INCLUDE_PATH);
        die(str_replace("<!-- ERROR -->", $e_string, $reghtm));                    
      } else {
        setcookie("alumdbauth_admin", $resp->getData()["authcode"],$resp->getData()["expire"], "/", $_SERVER['SERVER_NAME'], true);
        header("location: /admin/");
      }
   } else {
     readfile("adminlogin.html");
   }
 ?>