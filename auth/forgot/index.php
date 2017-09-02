<?php
   if($_SERVER["REQUEST_METHOD"] == "POST") {
    include("../../php/signal.class.php");
    include("../../php/auth.php");
    
    session_start();
    // email sent from form
    $email = $_POST["email"];
    $check_email = mysqli_query($conn, "SELECT Email FROM crud where Email = '$email' ");
    if(mysqli_num_rows($check_email) > 0){
        $msg = "First line of text\nSecond line of text";
        mail($email,"My subject",$msg);
    
    }
    else {
        readfile("forgot.html");
    }
}
?>

