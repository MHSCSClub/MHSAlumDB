<?php
    include ('../php/rds.php');
    $conn = new mysqli($dbhost, $username, $password, $dbname);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $alumnitable_id = $_POST["alumniid"];
    $query = "SELECT state,country FROM `alum_info` WHERE alumnitable_id = " . $alumnitable_id;
    $result = $conn->query($query); 
    $num_rows = $result->num_rows;
    if ($num_rows == 1) { 
        // output data of each row
        echo(row["state"]);
        echo(row["country"]);
    }
    else{
        trigger_error("error");
    }

?>