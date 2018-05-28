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
        $query = "SELECT firstName, lastName, currentstate, showState, country, showCountry, graduationYear FROM `alum_info` WHERE alumnitable_id = " . $alumnitable_id;
        $result = $conn->query($query);
        $num_rows = $result->num_rows;
        //var_dump($result);
        if ($num_rows == 1) {
            // assign info in array to variables
            $row = $result->fetch_assoc();
            $firstname= $row["firstName"];
            $lastname= $row["lastName"];
            $gyear = $row["graduationYear"];
            $showState = $row["showState"];
            $showCountry = $row["showCountry"];
            if($showState === false){
                $state = null;
            }
            else{
                $state = $row["currentstate"];
            }
            if($showCountry === false){
                $country = null;
            }
            else{
                $country = $row["currentstate"];
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
                    <a class="nav-link" href="/ui">Directory</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
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
        <p><?php echo "Phone number: " ?></p>
      </ul>
      <hr class="d-sm-none">
    </div>
  </div>
</div>
</body>
</html>