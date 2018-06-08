<?php
    ini_set('display_errors', 1);
    echo 'You have successfully logged into the admin page ';
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
    echo "Welcome to the edit events page";

?><html lang="en">
<head>

    <meta charset="utf-8"></meta>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
    <meta name="description" content=""></meta>
    <meta name="author" content=""></meta>
    <link rel="shortcut icon" href="/favicon.ico" />

    <title>Alumni Database</title>

    <!-- Bootstrap Core CSS -->
    <link href="../css/bootstrap.css" rel="stylesheet"></link>

</head>


<body>
<?php
    $query = "SELECT title, about, link, id FROM `events`";
        $query = $query .  " ORDER BY id DESC";
        $result = $conn->query($query);           
        $tablecode = "";
        $num_rows = $result->num_rows;
        if ($num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                ?>
                    <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                        <div class="col-md-5 p-lg-5 mx-auto my-5">
                        <h1 class="display-4 font-weight-normal"><?php echo $row['title']; ?></h1>
                        <p class="lead font-weight-normal"><?php echo $row['about']; ?></p>
                        <a class="btn btn-outline-secondary" href="#">Click here for a location</a>
                        </div>
                        <div class="product-device box-shadow d-none d-md-block"></div>
                        <div class="product-device product-device-2 box-shadow d-none d-md-block"></div>
                        <a href=https://alumdb.mamaroneckschoolsfoundation.org/admin/removedevent.php?id= . $row["id"]. >Remove</a>
                    </div>
                    <br>
                <?php
                
            }
        }
        
?></body>
</html>