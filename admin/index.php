<?php
    ini_set('display_errors', 1);
    echo 'You have successfully logged into the admin page';
    include( '../php/rds.php' );
    include("../php/signal.class.php");
    include("../php/auth.php");
    session_start();
    if(!isset($_COOKIE['alumdbauth_admin'])){
        header("location: /auth/");
        exit;
    } else {
        $resp = auth::check_auth($_COOKIE['alumdbauth_admin']);
        if($resp->isError()){
            header("location: /auth/");
            exit;
        }
          
    }
    include ('../php/rds.php');
    $conn = new mysqli($dbhost, $username, $password, $dbname);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

            $query = "SELECT username,firstname,lastname,graduationyear, confirmkey FROM `setupusers`";
            $result = $conn->query($query);           
            $num_rows_full = $result->num_rows;
            $max_pages = ceil($num_rows_full/100);
            $page = 1;


    if($max_pages == 0){
        echo "No users waiting for confirmation";
    }
    else{

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
                    $tablecode = $tablecode . '<tr><td><a href="https://alumdb.mamaroneckschoolsfoundation.org/admin/confirmalum.php?userName=' . $row["username"]. '">' . $row["username"]. '</a></td><td>' . $row["firstname"]. "</td><td>" . $row["lastname"]. "</td><td>" . $row["graduationyear"]. "</td></tr>";
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
    }
?>
    
    



