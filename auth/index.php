<?php
    //TODO: If logged in, redir to ui, else redir to login
    include( '../php/rds.php' );
    include("../php/signal.class.php");
    include("../php/auth.php");
    session_start();
    if(!isset($_COOKIE['alumdbauth'])){
        header("location: /auth/login");
        exit;
    } else {
        $resp = auth::check_auth($_COOKIE['alumdbauth']);
        if($resp->isError()){
            header("location: /auth/welcome");
            exit;
        } else {
            //echo $_COOKIE['alumdbauth'];
            header("location: /ui/");
        }
    }
?>