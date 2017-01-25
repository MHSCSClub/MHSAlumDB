<html>
    <head>
        <title>Logged out</title>
    </head>
    <body>
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
                <p>Redirecting to login</p>
        <script type="text/javascript">
        t1 = window.setTimeout(function(){ window.location = "/auth/login"; },3000);
        </script>
    </body>
</html>