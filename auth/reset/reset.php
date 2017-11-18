<?php
    ini_set('display_errors', 1);
    include("../../php/auth.php");
    
    $db = auth::getConnection();
        
    // Was the form submitted?
    if (isset($_POST["ResetPasswordForm"]))
    {
        // Gather the post data
        $email = $_POST["email"];
        $password = $_POST["password"];
        $confirmpassword = $_POST["confirmpassword"];
        $hash = $_POST["q"];

        // Use the same salt from the forgot_password.php file
        $salt = "498#2D83B631%3800EBD!801600D*7E3CC13";

        // Generate the reset key
        $resetkey = hash('sha512', $salt.$email);

        // Does the new reset key match the old one?
        if ($resetkey == $hash)
        {
            if ($password == $confirmpassword)
            {
                //has and secure the password
                $password = hash('sha512', $salt.$password);

                // Update the user's password
                    $query = $db->prepare('UPDATE users SET password = '$password' WHERE user = '$email'');
                    $query->bindParam('s', $password);
                    $query->bindParam('s', $email);
                    $query->execute();
                    $db = null;
                echo "Your password has been successfully reset.";
            }
            else
                echo "Your password's do not match.";
        }
        else
            echo "Your password reset key is invalid.";
    }

?>
