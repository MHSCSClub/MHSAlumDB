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
  $stmt = $conn->prepare('SELECT * FROM setupusers WHERE username = ?');
  if(!$stmt){
    echo "sql query did not go through.";
  }
  $results = $stmt->get_result();
  //echo '<pre/>'; print_r($conn->error_list); echo '</pre>';
  //$stmt->bind_param('ss', $username, $username);
  $stmt->execute();
  echo $username . " removed.";

  $stmt->close();

?>
