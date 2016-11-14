<html>
<head>
<title>Alumni Database</title>
</head>
<body>
<a href="/auth/logout">Logout</a><br>

<?php
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
        } else {
            $conn = new mysqli($dbhost, $username, $password, $dbname);
            if ($conn->connect_error) {
                die("Connection failed: " . $conn->connect_error);
            }
            $sql = "SELECT * FROM alum_info";
            $result = $conn->query($sql);
    
            if ($result->num_rows > 0) {
                // output data of each row
                echo "<table style=\"width:100%\" border=\"1\"><tr><th>Firstname</th><th>Lastname</th><th>Graduation Year</th></tr>";
                while($row = $result->fetch_assoc()) {
                    
                    echo "<tr><td>" . $row["firstName"]. "</td><td>" . $row["lastName"]. "</td><td>" . $row["graduationYear"]. "</td></tr>";
                }
                echo "</table>";
            } else {
                echo "0 results";
            }
            $conn->close();
        }
    }   
?>
</body>
</html>