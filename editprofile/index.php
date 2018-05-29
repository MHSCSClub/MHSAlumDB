<?php
    include( '../php/rds.php' );
    include("../php/signal.class.php");
    include("../php/auth.php");
    session_start();
    $conn = new mysqli($dbhost, $username, $password, $dbname);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
   $conn->close();

        if($_SERVER["REQUEST_METHOD"] == "POST") {
            $conn->query("UPDATE alumni SET firstname, lastname, currentstate, country, phonenumber ")
          
        }
        else{
            readfile("editInfo.php");  
        } 
?>


