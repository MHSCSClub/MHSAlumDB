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
        }
          
    }

    ini_set('display_errors', 1);

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
<html lang="en">
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


<body id="page-top" class="index">
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
                    <a class="nav-link" href="/mainprofile">My Profile</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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

        <p>
        <p>

    <section>
			<div class="container">
	            <div class="row">
                    
                </div>
                <div class="row">
                    <div class="col-lg-4 col-lg-offset-4">
                        <form class="form-inline my-2 my-lg-0" method="GET">
                                <input type="text" id="search" class="form-control mr-sm-2"  name="search" placeholder="Search for people you know"/>
                                <button class="btn btn-outline-success my-2 my-sm-0" type="submit" value="Submit">Search</button>
                        </form>
                    </div>
                </div>
                <br>
                <div class="row">
                    <div class="col-lg-12">
                        <?php
                            include ('../php/rds.php');
                            $conn = new mysqli($dbhost, $username, $password, $dbname);
                            if ($conn->connect_error) {
                                die("Connection failed: " . $conn->connect_error);
                            }

                            $query = "SELECT alumnitable_id,firstName,lastName,graduationYear FROM `alum_info`";
                            $search_str = "";
                            if(isset($_GET['search'])) {
                                $search_str = $_GET['search'];
                                $query_parts = explode(" ", $search_str);
                                $cols = array("lastName", "firstName", "graduationYear");
                                $query_full = array();
                                foreach($query_parts as &$part){
                                    $subquery = array();
                                    $part = "'%" . mysqli_real_escape_string($conn, $part) . "%'";
                                    foreach($cols as &$col){
                                        $a = "({$col} LIKE {$part})";
                                        $subquery[] = $a;
                                    }
                                    $query_full[] = "(" . implode(" OR ", $subquery) . ")";
                                }
                                $userQuery = implode(" AND ", $query_full);
                                $query = $query . " WHERE " . $userQuery;   
                            }

                            $result = $conn->query($query);           
                            $num_rows_full = $result->num_rows;

                            $max_pages = ceil($num_rows_full/100);


                            $page = 1;
                            if(isset($_GET["page"])){
                                $page = filter_input(INPUT_GET, 'page', FILTER_VALIDATE_INT);
                            }

                            $page = max(array(min(array($page, $max_pages)), 1));

                            $start = $page * 100 - 100;

                            if($start < 0){
                                $start = 0;
                            }


                           

                            $query = $query .  " ORDER BY graduationYear LIMIT {$start}, 100";
                            $result = $conn->query($query);           
                            $tablecode = "";
                            $num_rows = $result->num_rows;
                            if ($num_rows > 0) {
                                // output data of each row
                                $tablecode = "<table class=\"table table-hover\"><thead><tr><th>Name</th><th>Graduation Year</th></tr></thead><tbody>";
                                while($row = $result->fetch_assoc()) {
                                    $tablecode = $tablecode . '<tr><td><a href="https://alumdb.mamaroneckschoolsfoundation.org/individualprofiles/individualalumni.php?alumniid=' . $row["alumnitable_id"]. '">' . $row["firstName"]. " " . $row["lastName"]. '</a></td><td>' . $row["graduationYear"]. "</td></tr>";
                                }
                                $tablecode = $tablecode . "</tbody></table>";
                            }
                            echo $tablecode;
                            $res_str = "<div class=\"t_footer\"><br>{$num_rows_full} Result";
                            if($result->num_rows != 1){
                                $res_str = $res_str . "s";
                            }

                            $res_str = $res_str . ", {$num_rows} shown (page {$page} of " . $max_pages . ")<br>";
                                

                                $base_url = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH) . "?page=";
                                
                                $page_array = array();

                                $pages = array();
                                if($page != 1){
                                    $pages["First"]=1;
                                    $pages["Previous"]=$page - 1;
                                }
                                
                                if($page != $max_pages){
                                    $pages["Next"]=$page + 1;
                                    $pages["Last"]=$max_pages;
                                }
                                 

                                foreach ($pages as $name=>$pagenum) {
                                    $tmp_page = $base_url . $pagenum;
                                    if($search_str != ""){
                                        $tmp_page = $tmp_page . "&search=" . $search_str;
                                    }
                                    $page_array[] = "<a href={$tmp_page}>{$name}</a>";
                                } 
                                
                                
                                
                                $res_str = $res_str . implode(" ", $page_array);
                                $res_str = $res_str . "</div>";
                                echo $res_str;
                            
                            $conn->close();
                        ?>
                        <hr>
                    </div>
                </div>
        </div>
    </section>
    <!-- Scroll to Top Button (Only visible on small and extra-small screen sizes) -->
    <div class="scroll-top page-scroll hidden-sm hidden-xs hidden-lg hidden-md">
        <a class="btn btn-primary" href="#page-top">
            <i class="fa fa-chevron-up"></i>
        </a>
    </div>
    
    
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script>window.jQuery || document.write('<script src="../resources/js/jquery-slim.min.js"><\/script>')</script>
    <script src="../resources/js/popper.min.js"></script>
    <script src="../resources/js/bootstrap.min.js"></script>
</body>

</html>
