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
?>

<!DOCTYPE html>
<html lang="en"><head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="/favicon.ico">

    <title>Homepage</title>

    <!-- Bootstrap core CSS -->
    <link href="../css/bootstrap.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="../css/carousel.css" rel="stylesheet">
  </head>
  <body>
    <header>
      <nav class="navbar navbar-expand-sm bg-dark fixed-top navbar-dark">
            <div class="navbar-header">
                <a class="navbar-brand" href="#">MHS Alumni Database</a>
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
    </header>

    <main role="main">

      <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1" class=""></li>
          <li data-target="#myCarousel" data-slide-to="2" class=""></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="first-slide" src="../resources/img/newbackground.jpg" alt="First slide">
            <div class="container">
              <div class="carousel-caption text-left">
                <h1 class="display-2"><span-black>Find other alumni</span-black></h1>
                <p><span-black>Use our online directory to search by name or graduation year</span-black></p>
                <p><a class="btn btn-lg btn-primary" href="../directory" role="button">Sign up today</a></p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img class="second-slide" src="../resources/img/back.jpg" alt="Second slide">
            <div class="container">
              <div class="carousel-caption">
                <h1 class="display-2">Update your information</h1>
                <p>Edit your profile to keep us and other alumni updated</p>
                <p><a class="btn btn-lg btn-primary" href="../editprofile" role="button">Learn more</a></p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img class="third-slide" src="../resources/img/slide3.jpg" alt="Third slide">
            <div class="container">
              <div class="carousel-caption text-right">
                <h1 class="display-2">See school news and events</h1>
                <p>Check out posts from other alumni and the Mamaroneck Schools Foundation</p>
                <p><a class="btn btn-lg btn-primary" href="/homepage/index.php#newsfeed" role="button">Browse gallery</a></p>
              </div>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>


      <!-- Marketing messaging and featurettes
      ================================================== -->
      <!-- Wrap the rest of the page in another container to center all the content. -->

      <div class="container marketing">

        <!-- Two columns of text below the carousel -->
        <div class="row">
          <div class="col-lg-6">
            <img class="rounded-circle" style = "bg-white" src="/resources/img/person-6x.png" alt="Generic placeholder image" width="50" height="50">
            <h2>Reconnect with old friends. </h2>
            <p>Open the directory and click on names to view profiles on every alumni. </p>
            <p><a class="btn btn-secondary" href="#" role="button">View details »</a></p>
          </div><!-- /.col-lg-6 -->
          <div class="col-lg-6">
            <img class="rounded-circle" style = "bg-white" src="/resources/img/people-6x.png" alt="Generic placeholder image" width="50" height="50">
            <h2>Check out the chat </h2>
            <p>Click the chat link in the navbar to send messages</p>
            <p><a class="btn btn-secondary" href="#" role="button">View details »</a></p>
          </div><!-- /.col-lg-6 -->
        </div><!-- /.row -->


        <!-- START THE FEATURETTES -->

        
        <hr class="featurette-divider">
        <div class="row">
          <div class = "col-lg-6">
            <h1 class = "display-2">Events feed</h1>
            <?php

              $query = "SELECT title, about, link, id FROM `events`";
              $query = $query .  " ORDER BY id DESC";
              $result = $conn->query($query);           
              $tablecode = "";
              $num_rows = $result->num_rows;
              if ($num_rows > 0) {
                  while($row = $result->fetch_assoc()) {
                      ?>
                          <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 bg-light">
                              <div class="col-md-5 p-lg-5 mx-auto my-5">
                              <h1 class="display-5 font-weight-normal"><?php echo $row['title']; ?></h1>
                              <p class="lead font-weight-normal"><?php echo $row['about']; ?></p>
                              <a class="btn btn-outline-secondary" href="#">Click here for a location</a>
                              </div>
                              <div class="product-device box-shadow d-none d-md-block"></div>
                              <div class="product-device product-device-2 box-shadow d-none d-md-block"></div>
                          </div>
                          <br>
                      <?php
                      
                  }
              }

            ?>
          <div>
          <div class = "col-lg-6">
            <h1 class = "display-2">Posts</h1>
            <?php

              $query = "SELECT title, about, link, id FROM `alumposts`";
              $query = $query .  " ORDER BY id DESC";
              $result = $conn->query($query);           
              $num_rows = $result->num_rows;
              if ($num_rows > 0) {
                  while($row = $result->fetch_assoc()) {
                      ?>
                          <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 bg-light">
                              <div class="col-md-5 p-lg-5 mx-auto my-5">
                              <h1 class="display-5 font-weight-normal"><?php echo $row['title']; ?></h1>
                              <p class="lead font-weight-normal"><?php echo $row['about']; ?></p>
                              <a class="btn btn-outline-secondary" href="#">Click here for a location</a>
                              </div>
                              <div class="product-device box-shadow d-none d-md-block"></div>
                              <div class="product-device product-device-2 box-shadow d-none d-md-block"></div>
                          </div>
                          <br>
                      <?php
                      
                  }
              }

            ?>
          </div>
        </div>
        <hr class="featurette-divider">

        <!-- /END THE FEATURETTES -->

        <div class="row">
            
            <h2>Edit and update your own information</h2>
            <p>Go to your profile and click edit information to update us and the alumni community</p>
            <p><a class="btn btn-secondary" href="#" role="button">View details »</a></p>
        </div><!-- /.col-lg-4 -->

      </div><!-- /.container -->


      <!-- FOOTER -->
      <footer class="container">
        <p class="float-right"><a href="#">Back to top</a></p>
        <p>© 2017-2018 Max-Pablo, Inc. · <a href="#">Privacy</a> · <a href="#">Terms</a></p>
      </footer>
    </main>

    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script>window.jQuery || document.write('<script src="../resources/js/jquery-slim.min.js"><\/script>')</script>
    <script src="../resources/js/popper.min.js"></script>
    <script src="../resources/js/bootstrap.min.js"></script>
    <!-- Just to make our placeholder images work. Don't actually copy the next line! -->
    <script src="../resources/js/holder.min.js"></script>
  

<svg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500" preserveAspectRatio="none" style="display: none; visibility: hidden; position: absolute; top: -100%; left: -100%;"><defs><style type="text/css"></style></defs><text x="0" y="25" style="font-weight:bold;font-size:25pt;font-family:Arial, Helvetica, Open Sans, sans-serif">500x500</text></svg></body></html>
