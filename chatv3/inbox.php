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
        $row = $result->fetch_assoc();
        $firstlog = $row["firstLogin"];
        
    } else {
        echo "0 results";
    }
    if($firstlog == '1'){
        header("location: /userIDselection/");
    }

    $sql = "SELECT userid FROM users WHERE username = '$indivUser'";
    $result = $conn->query($sql);
    $id;
        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            $id = $row["userid"];
            
        } else {
            echo "0 results";
        }

    $stmt = $conn->prepare("SELECT fromuserid, body, timereceived FROM `inbox` WHERE recipid = ?");
    $stmt->bind_param('i', $id);
    $stmt->execute();
    $res = $stmt->get_result();
	$stmt->close();
    $num_rows = $res->num_rows;
    if ($num_rows > 0) {
        // output data of each row
        $tablecode = "<table class=\"table table-hover\"><thead><tr><th>From User</th><th>Message</th><th>Time Received</th></tr></thead><tbody>";
        while($row = $result->fetch_assoc()) {
            $tablecode = $tablecode . "<tr><td>" . $row["fromuser"]. "</td><td>" . $row["body"]. "</td><td>" . $row["timereceived"]. "</td></tr>";
        }
        $tablecode = $tablecode . "</tbody></table>";
    }
    echo $tablecode;

?>