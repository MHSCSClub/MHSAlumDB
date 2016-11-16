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
        } else {
            $conn = new mysqli($dbhost, $username, $password, $dbname);
            if ($conn->connect_error) {
                die("Connection failed: " . $conn->connect_error);
            }
            $page = 1;
            if(isset($_GET["pageNum"])){
                $page = filter_input(INPUT_GET, 'pageNum', FILTER_VALIDATE_INT);
            }
            
            $start = $page * 1000 - 1000;

            if($start < 1){
                $start = 1;
            }


            $query = "SELECT firstName,lastName,graduationYear FROM `alum_info`";
            if(isset($_GET['search']))
            {
                echo $_GET['search'];
                    $valueToSearch = "%" . mysqli_real_escape_string($conn, $_GET['search']) . "%";
                    // search in all table columns
                    // using concat mysql function
                    $query = $query . " WHERE (lastName LIKE '{$valueToSearch}') OR (firstName LIKE '{$valueToSearch}') OR (graduationYear LIKE '{$valueToSearch}')";   
            }

            $query = $query .  " ORDER BY graduationYear LIMIT {$start}, 1000";
            echo $query;
            $result = $conn->query($query);
            $num_rows = $result->num_rows;           

    
            $tablecode = "";
            if ($result->num_rows > 0) {
                // output data of each row
                $tablecode = "<table class=\"table\" id=\"table\" style=\"width:100%\" border=\"1\"><thread><tr><th>Firstname</th><th>Lastname</th><th>Graduation Year</th></tr></thread><tbody>";
                while($row = $result->fetch_assoc()) {
                    
                    $tablecode = $tablecode . "<tr><td>" . $row["firstName"]. "</td><td>" . $row["lastName"]. "</td><td>" . $row["graduationYear"]. "</td></tr>";
                }
                $tablecode = $tablecode . "</tbody></table><br>{$num_rows} Results";
                        //replace error placeholder
                
            } else {
                $tablecode = "No Results!";
            }
            $reghtm = file_get_contents('./ui.html', FILE_USE_INCLUDE_PATH);
                echo str_replace("<!-- table -->", $tablecode, $reghtm);
            $conn->close();
        }
    }   
?>