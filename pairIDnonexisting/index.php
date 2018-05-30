<?php
    ini_set('display_errors', 1);
    echo "Pairing account to new alumni info";
    session_start();
    include ('../php/rds.php');
    $conn = new mysqli($dbhost, $username, $password, $dbname);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    $indivUser = $_SESSION['individual'];
    
    $sql = "UPDATE `users` SET firstLogin = 0 WHERE username = '$indivUser'";
    if ($conn->query($sql) === TRUE) {
        echo "Record updated successfully";
    } else {
        echo "Error updating record: " . $conn->error;
    }
    $sql = "UPDATE `users` SET userid = (userid+29000) WHERE username = '$indivUser'";
    if ($conn->query($sql) === TRUE) {
        echo "Record updated successfully";
    } else {
        echo "Error updating record: " . $conn->error;
    }

?>

<html>
    <head>
        <title>Thank you for setting up your acccount</title>
    </head>
    <body>
        <p>Redirecting to finish setting up your profile</p>
        <script type="text/javascript">
            t1 = window.setTimeout(function(){ window.location = "/editprofile"; },3000);
        </script>
    </body>
</html>
