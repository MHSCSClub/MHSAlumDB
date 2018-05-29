<?php
    echo "hello";
    include( '../php/rds.php' );
    include("../php/signal.class.php");
    ini_set('display_errors', 1);
    session_start();
    $conn = new mysqli($dbhost, $username, $password, $dbname);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    else{
        echo "hello";
    }
?>


