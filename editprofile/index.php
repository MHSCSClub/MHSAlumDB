<?php
    session_start();
    ini_set('display_errors', 1);
    include('../php/rds.php');
    include("../php/signal.class.php");
    include("../php/auth.php");
    if(!isset($_COOKIE['alumdbauth'])){
        header("location: /auth/");
        exit;
    } else {
        $resp = auth::check_auth($_COOKIE['alumdbauth']);
        if($resp->isError()){
            header("location: /auth/");
            exit;
        }
          
    }
    
    $conn = new mysqli($dbhost, $username, $password, $dbname);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    $indivUser = $_SESSION['individual'];
    
    //echo '<div style="Color::white">"Welcome "'. $indivUser ' </span>';
    $sql = "SELECT userid FROM users WHERE username = '$indivUser'";
    $result = $conn->query($sql);
    $id;
        if ($result->num_rows > 0) {
                    // output data of each row
            while($row = $result->fetch_assoc()) {
                $id = $row["userid"];
            }
        } else {
            echo "0 results";
        }
        
        $query = "SELECT firstName, lastName, street, city, currentstate, zipcode, country, graduationYear, phoneNumber, jobTitle, businessName, businessStreet, businessCity, businessPhoneNumber, email FROM `alum_info` WHERE alumnitable_id = " . $id;
        $result = $conn->query($query);
        $num_rows = $result->num_rows;
        //var_dump($result);
        if ($num_rows == 1) {
            // assign info in array to variables
            $row = $result->fetch_assoc();
            $firstname= $row["firstName"];
            $lastname= $row["lastName"];
            $street = $row["street"];
            $city = $row["city"];
            $state= $row["currentstate"];
            $zipcode = $row["zipcode"];
            $country= $row["country"];
            $gyear = $row["graduationYear"];
            $phonenumber = $row["phoneNumber"];
            $jobtitle = $row["jobTitle"];
            $businessname = $row["businessName"];
            $businessstreet = $row["businessStreet"];
            $businesscity = $row["businessCity"];
            $businessphonenumber = $row["businessPhoneNumber"];
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

            
                <form method="post">
                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <label for="firstname">First Name</label>
                                <input type="text" class="form-control" id="firstname" name = "firstname" value ="<?php echo $firstname;?>">
                            </div>
                            <div class="form-group col-md-4">
                                <label for="lastname">Last Name</label>
                                <input type="text" class="form-control" id="lastname" name = "lastname" value="<?php echo $lastname;?>">
                            </div>
                            <div class="form-group col-md-4">
                                <label for="gyear">Graduation Year</label>
                                <input type="text" class="form-control" id="gyear" name = "gyear" value="<?php echo $gyear;?>">
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group col-md-8">
                                <label for="state">State</label>
                                <input type="text" class="form-control" id="state" name = "state" value = "<?php echo $state;?>">
                            </div>
                            <div class="form-group col-md-4">
                                <label for="showState">Show State</label>
                                <select id="showState" name = "showState" class="form-control">
                                    <option selected value=0>Hide</option>
                                    <option value=1>Show</option>
                                </select>
                            </div>
                        </div>

                        <label for="country" class="col-sm-2 col-form-label">Country</label>
                        <div class="form-group row">                            
                            <div class="col-sm-10">
                            <input class="form-control" type="text" id="country" name="country" value="<?php echo $country;?>">
                        </div>
                            
                        </div>
                        <label for="phonenumber" class="col-sm-2 col-form-label">Phone number</label>
                        <div class="form-group row">                          
                            <div class="col-sm-10">
                            <input class="form-control"  type="text" id="phonenumber" name="phonenumber" value="<?php echo $phonenumber;?>">
                            </div>    
                        </div>
               
                        








                        <div class="form-check">
                        <input class="form-check-input" value="1" name="showState" type="checkbox">
                        <label class="form-check-label" for="showState">
                            Show my current state
                        </label>
                        </div>
                        <div class="form-check">
                        <input class="form-check-input" value="1" name="showCountry" type="checkbox">
                        <label class="form-check-label" for="showCountry">
                            Show my country
                        </label>
                        </div>
                        <div class="form-check">
                        <input class="form-check-input" value="1" name="showPhonenumber" type="checkbox">
                        <label class="form-check-label" for="showPhonenumber">
                            Show my phone number
                        </label>
                        </div>

                        <div class="form-group row">
                            <div class="col-sm-10">
                            <button type="submit" class="btn btn-primary">Submit changes</button>
                            </div>
                        </div>
                </form>
        
        </div>
    </body>
</html>

<?php
    $conn = new mysqli($dbhost, $username, $password, $dbname);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    if($_SERVER["REQUEST_METHOD"] == "POST") {
        $firstname = $_POST['firstname'];
        $lastname = $_POST['lastname'];
        $state = $_POST['state'];
        $country = $_POST['country'];
        $gyear = $_POST['gyear'];


        $phonenumber = $_POST['phonenumber'];
        if(isset($_POST['showCountry'])){
            $showCountry = $_POST['showCountry'];
        }else{
            $showCountry = 0;
        }
        $showState = $_POST['showState'];
        if(isset($_POST['showPhonenumber'])){
            $showPhonenumber = $_POST['showPhonenumber'];
        }else{
            $showPhonenumber = 0;
        }

        
        echo $firstname;
        echo $lastname;
        echo $gyear;
        echo $state;
        echo $country;
        echo $phonenumber;
        echo $indivUser;
        echo $showCountry;
        echo $showState;
        echo $showPhonenumber;



        $sql = "SELECT userid FROM users WHERE username = '$indivUser'";
        $result = $conn->query($sql);
        $id;
        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
                $id = $row["userid"];
            
        } else {
            echo "0 results";
        }


        $stmt = $conn->prepare("UPDATE `alum_info` SET firstName = ?, lastName = ?, graduationYear = ?, currentstate = ?, country = ?, phoneNumber = ?, showState = ?, showCountry = ?, showPhone = ? WHERE alumnitable_id = ?");
        $stmt->bind_param('ssisssiiis', $firstname, $lastname, $gyear, $state, $country, $phonenumber, $showState, $showCountry, $showPhonenumber, $id);
        $stmt->execute();
        echo "success";

        readfile("redirect.html");
    }
    else{
        echo "";
    }
    
?>