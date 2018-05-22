<?php
    echo "Pairing account to previously entered info";
    include ('../php/rds.php');
    $conn = new mysqli($dbhost, $username, $password, $dbname);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    $alumnitable_id = $_GET["alumniid"];
    $indivUser = $_SESSION['individual'];
    $stmt = $conn->prepare('UPDATE users SET userid = ?, firstLogin=? WHERE username=?');
    $stmt->bindParams('sis', $alumnitable_id, 0, $indivUser);
    //remember to close later
    
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