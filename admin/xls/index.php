<?php
    ini_set('display_errors', 1);
    echo 'You have successfully logged into the admin page ';
    include( '../../php/rds.php' );
    include("../../php/signal.class.php");
    include("../../php/auth.php");
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
    echo "success1";
    if($_SERVER["REQUEST_METHOD"] == "POST") {
        $gyear = $_POST['gyear'];
        echo "success";
        include ('../php/rds.php');
        $conn = new mysqli($dbhost, $username, $password, $dbname);
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }
        $select = "";
        $result = $conn->query("SELECT firstName, lastName, graduationYear FROM alum_info WHERE graduationYear = $gyear");
        if (!$result) die('Couldn\'t fetch records');
        $num_fields = mysqli_num_fields($result);
        $headers = array();
        for ($i = 0; $i < $num_fields; $i++) {
            $headers[] = mysqli_field_name($result , $i);
        }
        $fp = fopen('php://output', 'w');
        if ($fp && $result) {
        header('Content-Type: text/csv');
        header('Content-Disposition: attachment; filename="export.csv"');
        header('Pragma: no-cache');
        header('Expires: 0');
        fputcsv($fp, $headers);
        while ($row = $result->fetch_array(MYSQLI_NUM)) {
            fputcsv($fp, array_values($row));
        }
        die;
        
    }
    else{
        echo "success 3";
        readfile("csv.html");
    }
    
}
function mysqli_field_name($result, $field_offset)
{
    $properties = mysqli_fetch_field_direct($result, $field_offset);
    return is_object($properties) ? $properties->name : null;
}
?>