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
            <a href="/chatv3/inbox.php" class="btn btn-primary btn-lg btn-block active" role="button" aria-pressed="true">My inbox</a>
            <br>
            <a href="/chatv3/sendmail.php" class="btn btn-primary btn-lg btn-block active" role="button" aria-pressed="true">My outbox</a>
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