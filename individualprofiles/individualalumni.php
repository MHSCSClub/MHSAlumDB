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
        $alumnitable_id = $_GET["alumniid"];
        $query = "SELECT firstName, lastName, street, showStreet, currentstate, showState, country, showCountry, graduationYear, phoneNumber, showPhone, email, showEmail FROM `alum_info` WHERE alumnitable_id = " . $alumnitable_id;
        $result = $conn->query($query);
        $num_rows = $result->num_rows;
        //var_dump($result);
        if ($num_rows == 1) {
            // assign info in array to variables
            $row = $result->fetch_assoc();
            $firstname= $row["firstName"];
            $lastname= $row["lastName"];
            $gyear = $row["graduationYear"];
            $showStreet = $row["showStreet"];
            $showState = $row["showState"];
            $showCountry = $row["showCountry"];
            $showPhonenumber = $row["showPhone"];
            $showEmail = $row["showEmail"];
            
            if($showStreet == 0){
                $street = "";
            }
            else{
                $street = $row["street"];
            }
            if($showState == 0){
                $state = "";
            }
            else{
                $state = $row["currentstate"];
            }
            if($showCountry == 0){
                $country = "";
            }
            else{
                $country = $row["country"];
            }
            if($showPhonenumber == 0){
                $phonenumber = "";
            }
            else{
                $phonenumber = $row["phoneNumber"];
            }
            if($showEmail == 0){
                $email = "";
            }
            else{
                $email = $row["email"];
            }
                    /*$tablecode = "<table class=\"table\" id=\"table\" style=\"width:100%\" border=\"1\"><thead><tr><th>Firstname</th><th>Lastname</th><th>State</th><th>Country</th></tr></thead><tbody>";
                    $tablecode = $tablecode . "<tr><td>" . $row["firstName"]. "</td><td>" . $row["lastName"]. "</td><td>" . $row["state"]. "</td><td>" . $row["country"]. "</td></tr>";
                    echo  $tablecode = $tablecode . "</tbody></table>";*/
        }
        else{
            trigger_error("error");
        }
        
    $conn->close();
?>
<!DOCTYPE html>
<html lang="en">
    <head>
    <title>Homepage</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="/css/bootstrap.min.css">
    <style>
    </style>
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
                    <a class="nav-link" href="/homepage">Homepage</a>
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

        <div class="jumbotron text-center" style="margin-bottom:0">
        <h1><?php echo $firstname . " " . $lastname . "'s Profile"; ?></h1>
        <p>My information</p> 
        </div>

        <div class="container" style="margin-top:30px">
        <div class="row">
            <div class="col-sm-8">
            <hr>
            <h3> About me </h3>  
            <hr>
            <ul class="nav nav-pills flex-column">
                <p><?php echo "Graduated in: " . $gyear; ?></p>
                <p><?php echo "Current employer: "  ?></p>
                <p><?php echo "Current address of residence: " . $street; ?></p>
                <p><?php echo "Current state of residence: " . $state; ?></p>
                <p><?php echo "Current country of residence: " . $country; ?></p>
                <p> Additional information: </p>
            </ul>
            <hr>
            <h3> Contact information </h3>
            <hr>

            <ul class="nav nav-pills flex-column">
                <p><?php echo "Phone number: " . $phonenumber ?></p>
                <p><?php echo "Email: " . $email ?></p>
            </ul>
            <hr class="d-sm-none">
            </div>
        </div>
        </div>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script>window.jQuery || document.write('<script src="../resources/js/jquery-slim.min.js"><\/script>')</script>
        <script src="../resources/js/popper.min.js"></script>
        <script src="../resources/js/bootstrap.min.js"></script>
    </body>
</html>