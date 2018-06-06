<?php
    session_start();
    
    ini_set('display_errors', 1);
    include('../php/rds.php');
    include("../php/signal.class.php");
    include("../php/auth.php");
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
    ?>
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            <meta name="description" content=""></meta>
            <meta name="author" content=""></meta>
            <link rel="shortcut icon" href="/favicon.ico" />
        
            <title>Conversation</title>
        
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
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script>window.jQuery || document.write('<script src="../resources/js/jquery-slim.min.js"><\/script>')</script>
        <script src="../resources/js/popper.min.js"></script>
        <script src="../resources/js/bootstrap.min.js"></script>
    </body>
    </html>
    <?
    $chatid = $_GET["chatid"]; //get unique chat id from link
    $stmt = $conn->prepare("SELECT fromuser, body, timereceived FROM `inbox` WHERE chainid = ?");
    $stmt->bind_param('i', $chatid);
    $stmt->execute();
    $res = $stmt->get_result();
	$stmt->close();
    $num_rows = $res->num_rows;
    if ($num_rows > 0) {
        // output data of each row
        $tablecode = "<table class=\"table table-hover\"><thead><tr><th>From User</th><th>Message</th><th>Time Received</th></tr></thead><tbody>";
        while($row = $res->fetch_assoc()) {
            //rename all to chat id
            $tablecode = $tablecode . "<tr><td>" . $row["fromuser"]. "</td><td>" . $row["body"]. "</td><td>" . $row["timereceived"]. "</td></tr>";;
        }
        $tablecode = $tablecode . "</tbody></table>";
    }
    echo $tablecode;

?>