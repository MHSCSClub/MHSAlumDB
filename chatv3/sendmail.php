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
?>

<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		<meta name="description" content="">
		<meta name="author" content="">
		<title>MHS Alum DB - Log-in</title>
		<link rel="shortcut icon" href="/favicon.ico" />
		<!-- Bootstrap core CSS -->
		<link href="../../css/bootstrap.min.css" rel="stylesheet">
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
        
		<form method="post" class = "form-signin">
            <div class="form-group">
                <label for="eventtitle">Send to</label>
                <input type="text" class="form-control" id="sendto" name = "sendto">
            </div>
            <div class="form-group">
                <label for="body">Message body</label>
                <textarea class="form-control" id="body" name = "body" rows="3"></textarea>
            </div>
            <div class="form-group row">
                <div class="col-sm-10">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </div>
		</form>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script>window.jQuery || document.write('<script src="../resources/js/jquery-slim.min.js"><\/script>')</script>
        <script src="../resources/js/popper.min.js"></script>
        <script src="../resources/js/bootstrap.min.js"></script>
    </body>
</html>

<?php
    //unique value for the conversation
    $sendto = $_POST['sendto'];
    $stmt = $conn->prepare("SELECT userid FROM `users` WHERE username = ?");
    $stmt->bind_param('s', $sendto);
    $stmt->execute();
    $res = $stmt->get_result();
    $stmt->close();
    $row = $res->fetch_assoc();
    $sendto = $row['userid'];

    
    $unique = $id+$sendto;
    
    $body = $_POST['body'];
    $stmt = $conn->prepare("INSERT INTO inbox (fromuser, recipid, body, timereceived, chainid) VALUES (?, ?, ?, NOW(), ?)");
    $stmt->bind_param('sisi', $indivUser, $sendto, $body, $unique);
    $stmt->execute();
    $stmt->close();

    echo "sent";
?>


