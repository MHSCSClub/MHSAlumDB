<?php
    echo "Pairing account to previously entered info";
    include ('../php/rds.php');
    $conn = new mysqli($dbhost, $username, $password, $dbname);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    $alumnitable_id = $_GET["alumniid"];
    $indivUser = $_SESSION['individual'];
    $conn->query("UPDATE 'users' SET userid = $alumnitable_id WHERE username ='$indivUser'");
    $conn->query("UPDATE 'users' SET firstLogin = 0 WHERE username ='$indivUser'");
    
    
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