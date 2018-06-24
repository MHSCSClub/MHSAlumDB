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

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $id = $row["userid"];
            
    } else {
        echo "0 results";
    }

    $recip = $_GET['alumniid'];
    $sql = "SELECT username FROM users WHERE userid = $recip";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $username = $row["username"];
            
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
      
      <nav class="navbar navbar-expand-sm bg-dark fixed-top navbar-dark">
            <div class="navbar-header">
            <a class="navbar-brand" href="#">
                <img src="/resources/img/logo.jpg" width="250" height="50" alt="">
            </a>
            </div>
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
                <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="#">Homepage</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/mainprofile">My Profile</a>
                </li>

                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="/ui" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                    <a class="nav-link" href="/chatv3">Chat</a>
                </li>
                
                </ul>
                <ul class="nav navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="/auth/logout">Logout</a>
                    </li> 
                </ul>
            </div>  
        </nav>
        
        <br>
        <br>
        <br>
		<form method="post" class = "form-signin">
            <div class="form-group">
                <label for="eventtitle">Send to</label>
                <input type="text" class="form-control" id="sendto" name = "sendto" placeholder="<?php $username?>" readonly>
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
    $sendto = $_GET['alumniid'];
    
    $body = $_POST['body'];
    $stmt = $conn->prepare("INSERT INTO inbox (fromuser, recipid, body, timereceived) VALUES (?, ?, ?, NOW())");
    $stmt->bind_param('sis', $indivUser, $sendto, $body);
    $stmt->execute();
    $stmt->close();

    echo "sent";
?>


