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
    $indivUser = $_SESSION['individual'];
    
    //echo '<div style="Color::white">"Welcome "'. $indivUser ' </span>';
    $sql = "SELECT userid FROM users WHERE username = '$indivUser'";
    $result = $conn->query($sql);
    $id;
        if ($result->num_rows > 0) {
                    // output data of each row
            while($row = $result->fetch_assoc()) {
                $id = $row["userid"];
            }
        } else {
            echo "0 results";
        }
        
        $query = "SELECT firstName, lastName, graduationYear, currentstate, showState, country, showCountry, phoneNumber FROM `alum_info` WHERE alumnitable_id = " . $id;
        $result = $conn->query($query);
        $num_rows = $result->num_rows;
        //var_dump($result);
        if ($num_rows == 1) {
            // assign info in array to variables
            $row = $result->fetch_assoc();
            $firstname= $row["firstName"];
            $lastname= $row["lastName"];
            $showState = $row["showState"];
            if($showState == 0){
                $state = "";
            }
            else{
                $state= $row["currentstate"];
            }
            $showCountry = $row["showCountry"];
            if($showCountry == 0){
                $country = "";
            }
            else{
                $country= $row["country"];
            }
            $country= $row["country"];
            $gyear = $row["graduationYear"];
            $phonenumber = $row["phoneNumber"];
            
        }
        else{
            trigger_error("error");
        }
        
    $conn->close();
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <title>My Profile</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="/css/bootstrap.min.css">
  <style>
    .fakeimg {
      height: 200px;
      background: #aaa;
    }
  </style>
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
                    <a class="nav-link" href="/ui">Directory</a>
                </li>
                
                <li class="nav-item">
                    <a class="nav-link" href="/chat">Chat</a>
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
        <p> Additional information: </p>
      </ul>
      <hr>
      <h3> Contact information </h3>
      <hr>

      <ul class="nav nav-pills flex-column">
        <p><?php echo "Phone number: " . $phonenumber; ?></p>
      </ul>
      <hr class="d-sm-none">
    </div>
    <div class="col-sm-4">
      <p><a class = "nav-link" href = "/editprofile"</a> Edit my information </p>  
    </div>
  </div>
</div>
</body>
</html>