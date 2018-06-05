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
	</body>
</html>

<?php
    $sendto = $_POST['sendto'];
    $body = $_POST['body'];
    $stmt = $conn->prepare("INSERT INTO inbox (fromuser, recipid, body, timereceived, chainid) VALUES (?, ?, ?, NOW(), ?)");
    $stmt->bind_param('sisi', $indivUser, $sendto, $body, $id);
    $stmt->execute();
    $stmt->close();

    echo "sent";
?>


