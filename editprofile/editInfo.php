<?php
    include( '../php/rds.php' );
    include("../php/signal.class.php");
    include("../php/auth.php");
    session_start();
    $conn = new mysqli($dbhost, $username, $password, $dbname);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
        $indivUser = $_SESSION['individual'];
        $sql = "SELECT userid FROM users WHERE username = '$indivUser'";
        $result = $conn->query($sql);
        $id;
        if ($result->num_rows == 1) {
            $row = $result->fetch_assoc()
            $id = $row["userid"];
        } else {
            echo "0 results";
        }
        $query = "SELECT firstName, lastName, currentstate, country, graduationYear, phoneNumber FROM `alum_info` WHERE alumnitable_id = " . $id;
        $result = $conn->query($query);
        $num_rows = $result->num_rows;
        //var_dump($result);
        if ($num_rows == 1) {
            // assign info in array to variables
            $row = $result->fetch_assoc();
            $firstname= $row["firstName"];
            $lastname= $row["lastName"];
            $state= $row["currentstate"];
            $country= $row["country"];
            $gyear = $row["graduationYear"];
            $phonenumber = $row["phoneNumber"];
        }
        else{
            trigger_error("error");
        }
        $conn->close();


?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Edit Profile</title>
        <link href="../css/bootstrap.css" rel="stylesheet"></link>
    </head>
                <body>
                    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
                        <div class="navbar-header">
                            <a class="navbar-brand" href="#">MHS Alumni Database</a>
                        </div>
                        <div class="collapse navbar-collapse" id="collapsibleNavbar">
                            <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="/ui">Directory</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li>    
                            
                            </ul>
                            <ul class="nav navbar-nav ml-auto">
                                <li class="nav-item">
                                    <a class="nav-link" href="/auth/logout">Logout</a>
                                </li> 
                            </ul>
                        </div>  
                    </nav>


                   <div class="container" style="margin-top:30px">
        <div class="row">
            
                <form method="post">
                        <div class="form-group row">
                            <label for="firstname" class="col-sm-2 col-form-label">Firstname</label>
                            <div class="col-sm-10">
                            <input class="form-control" id="firstname" value=<?php echo $firstname;?> type="text">
                            </div>
                        </div>
   
                        <div class="form-group row">
                            <label for="lastname" class="col-sm-2 col-form-label">Lastname</label>
                            <div class="col-sm-10">
                            <input class="form-control" id="lastname" value=<?php echo $lastname;?> type="text">
                            </div>
                            
                        </div>
                        <div class="form-group row">
                            <label for="state" class="col-sm-2 col-form-label">State</label>
                            <div class="col-sm-10">
                            <input class="form-control" id="state" value=<?php echo $state;?> type="text">
                            </div>
                           
                        </div>
                        <div class="form-group row">
                            <label for="country" class="col-sm-2 col-form-label">Country</label>
                            <div class="col-sm-10">
                            <input class="form-control" id="country" value=<?php echo $country;?> type="text">
                            </div>
                            
                        </div>
                        <div class="form-group row">
                            <label for="phonenumber" class="col-sm-2 col-form-label">Phone number</label>
                            <div class="col-sm-10">
                            <input class="form-control" id="phonenumber" value=<?php echo $phonenumber;?> type="text">
                            </div>
                            
                        </div>
                        <div class="form-group row">
                            <div class="col-sm-10">
                            <button type="submit" class="btn btn-primary">Submit changes</button>
                            </div>
                        </div>
               
                   
                        <div class="form-check">
                        <input class="form-check-input" value="" id="showFirstname" type="checkbox">
                        <label class="form-check-label" for="showFirstname">
                            Show firstname
                        </label>
                        </div>
                        <div class="form-check">
                        <input class="form-check-input" value="" id="showLastname" type="checkbox">
                        <label class="form-check-label" for="showLastname">
                            Show lastname
                        </label>
                        </div>
                        <div class="form-check">
                        <input class="form-check-input" value="" id="showState" type="checkbox">
                        <label class="form-check-label" for="showState">
                            Show my current state
                        </label>
                        </div>
                        <div class="form-check">
                        <input class="form-check-input" value="" id="showCountry" type="checkbox">
                        <label class="form-check-label" for="showCountry">
                            Show my country
                        </label>
                        </div>
                        <div class="form-check">
                        <input class="form-check-input" value="" id="showPhonenumber" type="checkbox">
                        <label class="form-check-label" for="showPhonenumber">
                            Show my phone number
                        </label>
                        </div>
                </form>
            </div>
        </div>
    </body>
</html>