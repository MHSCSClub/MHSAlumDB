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
    <link href="../css/bootstrap.min.css" rel="stylesheet"></link>

    <!-- Theme CSS -->
    <link href="../css/freelancer.min.css" rel="stylesheet"></link>
	<!-- Custom CSS -->
	<link href="../css/style.css" rel="stylesheet"></link>
    <!-- Custom Fonts -->
    <link href="../vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css"></link>
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css"></link>
    <link href="https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic" rel="stylesheet" type="text/css"></link>

</head>

<body id="page-top" class="index">
    <!-- Navigation -->
    <nav id="mainNav" class="navbar navbar-default navbar-fixed-top navbar-custom">
        <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header page-scroll">
                <header>
                <a class="navbar-brand" href="#page-top">Account Setup</a>
                </header>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    <li class="hidden">
                        <a href="#page-top"></a>
                    </li>
                    <li>
                        <a href="/auth/logout">Logout</a>
                    </li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container-fluid -->
    </nav>
    <!-- This is the table -->
    <section>
			<div class="container">
	            <div class="row">
                    <div class="col-lg-12">
                        <h3>Use the Searchbar below to locate yourself in the database</h3>
                        <a href="https://alumdb.mamaroneckschoolsfoundation.org/pairIDnonexisting/" class="btn btn-primary btn-lg btn-block active" role="button" aria-pressed="true">If you are unable to find yourself click here</a>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-lg-offset-4">
                        <form class="input-group" method="GET">
                                <input type="text" id="search" class="form-control"  name="search" placeholder="Search"/>
                                <span class="input-group-btn">
                                    <input type="submit" class="form-control button" value="Submit"/>
                                </span>
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
                            if($start <= 0){
                                $start = 0;
                            }


                           

                            $query = $query .  " ORDER BY graduationYear LIMIT {$start}, 100";
                            $result = $conn->query($query);           
                            $tablecode = "";
                            $num_rows = $result->num_rows;
                            if ($num_rows > 0) {
                                // output data of each row
                                $tablecode = "<table class=\"table\" id=\"table\" style=\"width:100%\" border=\"1\"><thead><tr><th>Firstname</th><th>Lastname</th><th>Graduation Year</th></tr></thead><tbody>";
                                while($row = $result->fetch_assoc()) {
                                    //links to pair user ID with existing alumni
                                    $tablecode = $tablecode . '<tr><td><a href="https://alumdb.mamaroneckschoolsfoundation.org/pairIDexisting/index.php?alumniid=' . $row["alumnitable_id"]. '">' . $row["firstName"]. '</a></td><td>' . $row["lastName"]. "</td><td>" . $row["graduationYear"]. "</td></tr>";
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
     -->
    <div class="scroll-top page-scroll hidden-sm hidden-xs hidden-lg hidden-md">
        <a class="btn btn-primary" href="#page-top">
            <i class="fa fa-chevron-up"></i>
        </a>
    </div>
    
    

    <!-- Bootstrap Core JavaScript -->
    <script src="../js/bootstrap.min.js"></script>

    <!-- Plugin JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>

	
    <!-- Theme JavaScript -->
    <script src="../js/freelancer.min.js"></script>

</body>

</html>
