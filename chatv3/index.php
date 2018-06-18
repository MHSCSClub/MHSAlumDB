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
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
            <div class="navbar-header">
                <a class="navbar-brand" href="#">MHS Alumni Database</a>
            </div>
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="/homepage">Homepage</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/mainprofile">My Profile</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Directories
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="/ui">Main Directory</a>
                            <a class="dropdown-item" href="/internshipui">Internship Directory</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/events">Events</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/chat">Chat</a>
                    </li>    
                </ul>
            </div>  
        </nav>
        <a href="/chatv3/inbox.php" class="btn btn-primary btn-lg btn-block active" role="button" aria-pressed="true">My inbox</a>
        <br>
        <a href="/chatv3/sendto.php" class="btn btn-primary btn-lg btn-block active" role="button" aria-pressed="true">My outbox</a>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script>window.jQuery || document.write('<script src="../resources/js/jquery-slim.min.js"><\/script>')</script>
        <script src="../resources/js/popper.min.js"></script>
        <script src="../resources/js/bootstrap.min.js"></script>
    </body>
</html>