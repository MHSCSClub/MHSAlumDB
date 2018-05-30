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
  $stmt->bind_param('s', $username);
  if(!$stmt){
    echo "sql query did not go through.";
  }
  $stmt->execute();
  $results = $stmt->get_result();
  while ($row = $results->fetch_assoc()) {
        $username = $row['username'];
   }
  $stmt->close();

  $stmt = $conn->prepare('DELETE FROM setupusers WHERE username = ?');
  if(!$stmt){
    echo "sql query did not go through.";
  }
  $stmt->bind_param('s', $username);

  $stmt->execute();
  echo $username . " removed.";

  $stmt->close();

?>
