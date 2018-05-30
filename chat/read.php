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

$query="SELECT * FROM chat ORDER BY id ASC";
//execute query
if ($conn->real_query($query)) {
    //If the query was successful
    $res = $conn->use_result();

    while ($row = $res->fetch_assoc()) {
        $username=$row["username"];
        $text=$row["text"];
        $time=date('G:i', strtotime($row["time"])); //outputs date as # #Hour#:#Minute#

        echo "<p>$time | $username: $text</p>\n";
    }
}else{
    //If the query was NOT successful
    echo "An error occured";
    echo $conn->errno;
}

$conn->close();
?>
