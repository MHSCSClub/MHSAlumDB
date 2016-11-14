<?php
    include( '../../php/rds.php' );
    include("../../php/signal.class.php");
    include("../../php/auth.php");
    session_start();
    if(!isset($_COOKIE['alumdbauth'])){
        die("you are already logged out");
    } else {
        $resp = auth::logout($_COOKIE['alumdbauth']);
        if($resp->isError()){
            die("Error logging out");
            exit;
        } else {
            $cookie_name = 'alumdbauth';
            
            unset($_COOKIE[$cookie_name]);
            // empty value and expiration one hour before
            $res = setcookie($cookie_name, null, -1, '/');
            echo "Logged out successfully";
            exit;
        }
    }
 ?>