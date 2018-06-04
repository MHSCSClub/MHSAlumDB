<?php
    ini_set('display_errors', 1);
    include( '../php/rds.php' );
    include("../php/signal.class.php");
    include("../php/auth.php");
    session_start();
    if(!isset($_COOKIE['alumdbauth'])){
        header("location: /auth/");
        exit;
    } else {
        $resp = auth::check_auth($_COOKIE['alumdbauth']);
        if($resp->isError()){
            header("location: /auth/");
            exit;
        }
          
    }
    $conn = new mysqli($dbhost, $username, $password, $dbname);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    $indivUser = $_SESSION['individual'];
    
    $sql = "SELECT firstLogin FROM users WHERE username = '$indivUser'";
    $result = $conn->query($sql);
    

    $firstlog;
    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
            $firstlog = $row["firstLogin"];
        }
    } else {
        echo "0 results";
    }
    if($firstlog == '1'){
        header("location: /userIDselection/");
    }

    $query = "SELECT title, about, link, id FROM `events`";
    $query = $query .  " ORDER BY id DESC";
    $result = $conn->query($query);           
    $tablecode = "";
    $num_rows = $result->num_rows;
    if ($num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            echo $row['id']. " " . $row['title']. " " . $row['link']. " " . $row['about'] . " ";
        }
    }
    
?>