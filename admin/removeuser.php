<?php
  session_start();
  ini_set('display_errors', 1);
  include("../php/signal.class.php");
  include("../php/auth.php");
  include('../php/rds.php');
  $conn = new mysqli($dbhost, $username, $password, $dbname);
  if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
  }
  $username = $_GET["userName"];
  echo "Username : " . $username;
  if ($stmt = $conn->prepare('USE setupusers; GO; DROP USER [?]; GO;')) {
     echo "remove worked ";
     $stmt->bind_param('s', $username);
     $stmt->execute();
   }
  echo $username . " removed.";
?>
