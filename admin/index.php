<?php
    ini_set('display_errors', 1);
    echo 'You have successfully logged into the admin page';
    include( '../php/rds.php' );
    include("../php/signal.class.php");
    include("../php/auth.php");
    session_start();
    if(!isset($_COOKIE['alumdbauth_admin'])){
        echo "you do not have access to this page";
        // sleep for 3 seconds
        sleep(3);
        header("location: /auth/");
            exit;
    } else {
        $resp = auth::check_auth($_COOKIE['alumdbauth_admin']);
        if($resp->isError()){
            echo "you do not have access to this page";
            // sleep for 3 seconds
            sleep(3);
            header("location: /auth/");
            exit;
        }

    }
    include ('../php/rds.php');
    $conn = new mysqli($dbhost, $username, $password, $dbname);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
    <meta name="description" content=""></meta>
    <meta name="author" content=""></meta>
    <link rel="shortcut icon" href="/favicon.ico" />

    <title>Admin Homepage</title>

    <!-- Bootstrap Core CSS -->
    <link href="../css/bootstrap.css" rel="stylesheet"></link>

</head>

<body>
    <a href="/admin/setupusers.php" class="btn btn-primary btn-lg btn-block active" role="button" aria-pressed="true">Add users</a>
    <br>
    <a href="/admin/addevent.php" class="btn btn-primary btn-lg btn-block active" role="button" aria-pressed="true">Add events to the event page</a>
    <br>
    <a href="/admin/removeevent.php" class="btn btn-primary btn-lg btn-block active" role="button" aria-pressed="true">Remove events from the event page</a>
    <br>
    <a href="/admin/confirmposts.php" class="btn btn-primary btn-lg btn-block active" role="button" aria-pressed="true">Confirm posts submitted by alumni</a>
    <br>
    <a href="/admin/removealumpost.php" class="btn btn-primary btn-lg btn-block active" role="button" aria-pressed="true">Remove posts submitted by alumni</a>
   

</body>
</html>