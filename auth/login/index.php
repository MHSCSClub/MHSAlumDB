<?php
   if($_SERVER["REQUEST_METHOD"] == "POST") {
      include("../../php/signal.class.php");
      include("../../php/auth.php");
<<<<<<< HEAD
      
      

=======
      // Max Bobby
>>>>>>> 6ca94693aba2c5fcace8608e91bc9d97baa4ce10
      session_start();
      // username and password sent from form
      $resp = auth::login($_POST['username'], $_POST['password']);
      $_SESSION['individual'] = $_POST['username'];
      

      

      //print(json_encode($resp->toArray()));
      //print(json_encode($resp->getData()));
      if($resp->isError()){
        $error = $resp->getMessage();
        //replace error placeholder
        $e_string = "<div id=\"error\"><img src=\"/img/Delete-icon.png\"/><p>{$error}</p></div>";
        $reghtm = file_get_contents('./login.html', FILE_USE_INCLUDE_PATH);
<<<<<<< HEAD
        die(str_replace("<!-- ERROR -->", $e_string, $reghtm));                    
      } 
      else {
=======
        die(str_replace("<!-- ERROR -->", $e_string, $reghtm));
      } else {
>>>>>>> 6ca94693aba2c5fcace8608e91bc9d97baa4ce10
        setcookie("alumdbauth", $resp->getData()["authcode"],$resp->getData()["expire"], "/", $_SERVER['SERVER_NAME'], true);
        //firstLogin
        $conn = new mysqli($dbhost, $username, $password, $dbname);
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }
        else{
          $sql = "SELECT firstLogin FROM users WHERE username = '$_POST['username']'";
          $result = $conn->query($sql);
          $firstLog;
          if ($result->num_rows > 0) {
            // output data of each row
            while($row = $result->fetch_assoc()) {
                $firstlog = $row["firstLogin"];
            }
          } 
          else {
            echo "0 results";
          }

          if($firstLog === 1){
            header("location: /userIDselection");
          }
          else{
            header("location: /ui/");
          }
        }
        header("location: /ui/");
      }
   } 
   else {
     readfile("login.html");
   }
 ?>
