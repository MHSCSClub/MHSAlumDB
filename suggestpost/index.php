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
    echo "Welcome to the add events page";
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
                <label for="eventtitle">Event name</label>
                <input type="text" class="form-control" id="eventtitle" name = "eventtitle">
            </div>
            <div class="form-group">
                <label for="link">Link to event location</label>
                <input type="text" class="form-control" id="link" name = "link">
            </div>
        
            <div class="form-group">
                <label for="eventbody">Event body</label>
                <textarea class="form-control" id="eventbody" name = "eventbody" rows="3"></textarea>
            </div>
            <div class="form-group row">
                <div class="col-sm-10">
                    <button type="submit" class="btn btn-primary">Submit changes</button>
                </div>
            </div>
		</form>
		
	</body>
</html>

<?php
    $conn = new mysqli($dbhost, $username, $password, $dbname);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    if($_SERVER["REQUEST_METHOD"] == "POST") {
        $event_title = $_POST['eventtitle'];
        $event_body = $_POST['eventbody'];
        $event_link = $_POST['link'];
        $stmt = $conn->prepare('INSERT INTO alumposts (title, about, link) VALUES (?, ?, ?)');
		$stmt->bind_param('sss', $event_title, $event_body, $event_link);
		$stmt->execute();
		$stmt->close();
    }
    echo "success";
?>
