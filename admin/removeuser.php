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
  $stmt = $conn->prepare('IF  EXISTS (SELECT * FROM setupusers WHERE username = ?)
  DROP USER [?]');
  $stmt->bind_param('s', $username);
  $stmt->execute();
  echo $username . " removed.";

?>
