<?php
    echo "hello";
    include( '../php/rds.php' );
    include("../php/signal.class.php");
    include("../php/auth.php");
    ini_set('display_errors', 1);
    session_start();
    $conn = new mysqli($dbhost, $username, $password, $dbname);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
   $indivUser = $_SESSION['individual'];

        if($_SERVER["REQUEST_METHOD"] == "POST") {
            $firstname = $_POST['firstname'];
            $lastname = $_POST['lastname'];
            $state = $_POST['state'];
            $country = $_POST['country'];
            $phonenumber = $_POST['phonenumber'];

            $stmt = $conn->query("UPDATE alumni SET firstname = ?, lastname = ?, currentstate = ?, country = ?, phoneNumber = ? WHERE username = ?");
            $stmt->bind_param('ssssss', $firstname, $lastname, $state, $country, $phonenumber, $indivUser);
            $stmt->execute();
        }
        else{
            readfile("editInfo.php");  
        } 
?>


