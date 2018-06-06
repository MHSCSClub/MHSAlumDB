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
    $query = "SELECT title, about, link, id FROM `alumposts`";
        $result = $conn->query($query);           
        $tablecode = "";
        $num_rows = $result->num_rows;
            if ($num_rows > 0) {
                // output data of each row
                $tablecode = "<table class=\"table table-hover\"><thead><tr><th>Title</th><th>Body</th></tr></thead><tbody>";
                while($row = $result->fetch_assoc()) {
                    $tablecode = $tablecode . '<tr><td><a href="https://alumdb.mamaroneckschoolsfoundation.org/admin/confirmed.php?postid=' . $row["id"]. '">' . $row["title"]. '</a></td><td>' . $row["about"]. "</td></tr>";
                 }
             $tablecode = $tablecode . "</tbody></table>";
            }
        echo $tablecode;
?>

