<?php
    ini_set('display_errors', 1);
    echo 'You have successfully logged into the admin page';
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

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>
        <?php
            ini_set('display_errors', 1);
            include ('../php/rds.php');
            $conn = new mysqli($dbhost, $username, $password, $dbname);
            if ($conn->connect_error) {
                die("Connection failed: " . $conn->connect_error);
            }

            $query = "SELECT username,firstname,lastname,graduationyear FROM `setupusers`";
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
            $query = $query .  " ORDER BY graduationyear LIMIT {$start}, 100";
            $result = $conn->query($query);           
            $tablecode = "";
            $num_rows = $result->num_rows;
            if ($num_rows > 0) {
                // output data of each row
                $tablecode = "<table class=\"table\" id=\"table\" style=\"width:100%\" border=\"1\"><thead><tr><th>Firstname</th><th>Lastname</th><th>Graduation Year</th></tr></thead><tbody>";
                while($row = $result->fetch_assoc()) {
                    $tablecode = $tablecode . '<tr><td><a href="https://alumdb.mamaroneckschoolsfoundation.org/profile/individualalumni.php?alumniid=' . $row["username"]. '">' . $row["firstname"]. '</a></td><td>' . $row["lastname"]. "</td><td>" . $row["graduationyear"]. "</td></tr>";
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
    
    <script>
        //http://stackoverflow.com/questions/5448545/how-to-retrieve-get-parameters-from-javascript
        function findGetParameter(parameterName) {
            var result = null,
            tmp = [];
            var items = location.search.substr(1).split("&");
            for (var index = 0; index < items.length; index++) {
                tmp = items[index].split("=");
                if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
            }
            return result;
        }

        document.getElementById('search').value=findGetParameter(search); 
    </script>

</body>

</html>



