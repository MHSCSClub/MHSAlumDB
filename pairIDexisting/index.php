<?php
    echo "Pairing account to previously entered info";
    session_start();
    include ('../php/rds.php');
    $conn = new mysqli($dbhost, $username, $password, $dbname);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    $alumnitable_id = $_GET["alumniid"];
    $indivUser = $_SESSION['individual'];
    echo $alumnitable_id;
    echo $indivUser;
    $sql = "UPDATE users SET firstLogin=0 WHERE username = $indivUser";
    
    if ($conn->query($sql) === TRUE) {
        echo "Record updated successfully";
    } else {
        echo "Error updating record: " . $conn->error;
    }
    
    $conn->close();
    
?>

<html>
    <head>
        <title>Thank you for setting up your acccount</title>
    </head>
    <body>
        <p>Redirecting to UI...Welcome to the MHS Alumni Database</p>
        <script type="text/javascript">
            t1 = window.setTimeout(function(){ window.location = "/ui"; },3000);
        </script>
    </body>
</html>