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

  $stmt = $conn->prepare('DELETE FROM setupusers WHERE username = ?');
  if(!$stmt){
    echo "sql query did not go through.";
  }
  $stmt->bind_param('s', $username);

  $stmt->execute();
  header("Refresh:5; url=index.php");
  echo "The account '" . $username . "' has been removed.";

  $stmt->close();

?>
