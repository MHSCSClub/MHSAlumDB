<?php
    //TODO: If logged in, redir to ui, else redir to login
    if(!isset($_COOKIE['alumdbauth'])){
        header("location: login/");
        exit;
    } else {
        echo $_COOKIE['alumdbauth'];
    }
?>