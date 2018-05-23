<?php
        ini_set('display_errors', 1);
        include ('../php/rds.php');
        $conn = new mysqli($dbhost, $username, $password, $dbname);
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        $username = $_GET["userName"];
        $stmt = $conn->query("SELECT username, authkey FROM `setupusers` WHERE username = ?");
        $stmt->bind_param('s', $username);
        $stmt->execute();
		$res = $stmt->get_result();
        
		if($res->num_rows == 1){
            $row = $res->fetch_assoc();
            $key = $row['authkey'];
            auth::sendmail_register($username, $key);
        }
        else{
            trigger_error("error");
        }
		$stmt->close();
        
?>

<html>
    <head>
        <title>Registration either complete or incorrect</title>
    </head>
    <body>
        <p>Redirecting to main admin page</p>
        <script type="text/javascript">
            t1 = window.setTimeout(function(){ window.location = "/admin/index"; },3000);
        </script>
    </body>
</html>