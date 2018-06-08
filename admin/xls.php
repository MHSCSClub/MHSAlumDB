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
    echo "Welcome to the create file page";
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
                                $html = str_get_html($tablecode);



                                header('Content-type: application/ms-excel');
                                header('Content-Disposition: attachment; filename=sample.csv');

                                $fp = fopen("php://output", "w");

                                foreach($html->find('tr') as $element)
                                {
                                    $td = array();
                                    foreach( $element->find('th') as $row)  
                                    {
                                        $td [] = $row->plaintext;
                                    }
                                    fputcsv($fp, $td);

                                    $td = array();
                                    foreach( $element->find('td') as $row)  
                                    {
                                        $td [] = $row->plaintext;
                                    }
                                    fputcsv($fp, $td);
                                }


                                fclose($fp);

?>