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
  echo "username : " . $username;
  $stmt = $conn->prepare('IF  EXISTS (SELECT * FROM setupusers WHERE username = ?) DROP USER [?]');
  echo "error list : " . $conn->error_list . " end.";
  $stmt->bind_param('ss', $username, $username);
  $stmt->execute();
  echo $username . " removed.";

?>
