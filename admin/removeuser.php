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
  echo "USERname : " . $username;
  $stmt = $conn->prepare('IF  EXISTS (SELECT * FROM setupusers WHERE username = ?) DROP USER [?]');
  if(!$stmt){
    echo "sql query did not go through.";
  }
  //echo '<pre/>'; print_r($conn->error_list); echo '</pre>';
  //$stmt->bind_param('ss', $username, $username);
  $stmt->execute(array($username));
  echo $username . " removed.";

  $stmt->close();

?>
