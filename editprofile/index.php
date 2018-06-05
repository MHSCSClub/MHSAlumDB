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
            $email = $row["email"];
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
                    <a class="nav-link" href="/homepage">Homepage</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/mainprofile">My Profile</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Directories
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="/ui">Main Directory</a>
                        <a class="dropdown-item" href="/internshipui">Internship Directory</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/events">Events</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/chat">Chat</a>
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
                                <label for="street">Street</label>
                                <input type="text" class="form-control" id="street" name = "street" value = "<?php echo $street;?>">
                            </div>
                            <div class="form-group col-md-4">
                                <label for="showStreet">Show Street</label>
                                <select id="showStreet" name = "showStreet" class="form-control">
                                    <option selected value=0>Hide</option>
                                    <option value=1>Show</option>
                                </select>
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group col-md-8">
                                <label for="city">City</label>
                                <input type="text" class="form-control" id="city" name = "city" value = "<?php echo $city;?>">
                            </div>
                            <div class="form-group col-md-4">
                                <label for="showCity">Show City</label>
                                <select id="showCity" name = "showCity" class="form-control">
                                    <option selected value=0>Hide</option>
                                    <option value=1>Show</option>
                                </select>
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

                        <div class="form-row">
                            <div class="form-group col-md-8">
                                <label for="zipcode">Zipcode</label>
                                <input type="text" class="form-control" id="zipcode" name = "zipcode" value = "<?php echo $zipcode;?>">
                            </div>
                            <div class="form-group col-md-4">
                                <label for="showZipcode">Show Zipcode</label>
                                <select id="showZipcode" name = "showZipcode" class="form-control">
                                    <option selected value=0>Hide</option>
                                    <option value=1>Show</option>
                                </select>
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group col-md-8">
                                <label for="country">Country</label>
                                <input type="text" class="form-control" id="country" name = "country" value = "<?php echo $country;?>">
                            </div>
                            <div class="form-group col-md-4">
                                <label for="showCountry">Show Country</label>
                                <select id="showCountry" name = "showCountry" class="form-control">
                                    <option selected value=0>Hide</option>
                                    <option value=1>Show</option>
                                </select>
                            </div>
                        </div>
                            
                        <div class="form-row">
                            <div class="form-group col-md-8">
                                <label for="phonenumber">Phone Number</label>
                                <input type="text" class="form-control" id="phonenumber" name = "phonenumber" value = "<?php echo $phonenumber;?>">
                            </div>
                            <div class="form-group col-md-4">
                                <label for="showPhonenumber">Show Phone Number</label>
                                <select id="showPhonenumber" name = "showPhonenumber" class="form-control">
                                    <option selected value=0>Hide</option>
                                    <option value=1>Show</option>
                                </select>
                            </div>
                        </div>

                         <div class="form-row">
                            <div class="form-group col-md-8">
                                <label for="email">Email</label>
                                <input type="text" class="form-control" id="email" name = "email" value = "<?php echo $email;?>">
                            </div>
                            <div class="form-group col-md-4">
                                <label for="showEmail">Show Email</label>
                                <select id="showEmail" name = "showEmail" class="form-control">
                                    <option selected value=0>Hide</option>
                                    <option value=1>Show</option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="form-row">
                            <div class="form-group col-md-8">
                                <label for="jobfield">Show Phone Number</label>
                                <select id="jobfield" name = "jobfield" class="form-control">
                                    <option selected value="">Select a field</option>
                                    <option value="Construction" >Construction</option>
                                    <option value="Finance">Finance</option>
                                    <option value="Technology">Technology</option>
                                    <option value="Healthcare">Healthcare</option>
                                    <option value="Insurance">Insurance</option>
                                    <option value="Services">Services</option>
                                </select>
                            </div>
                            <div class="form-group col-md-4">
                                <label for="showjobinfo">Show me in internship database</label>
                                <select id="showjobinfo" name = "showjobinfo" class="form-control">
                                    <option selected value=0>Hide</option>
                                    <option value=1>Show</option>
                                </select>
                            </div>
                        </div>
                        

                        <div class="form-group row">
                            <div class="col-sm-10">
                            <button type="submit" class="btn btn-primary">Submit changes</button>
                            </div>
                        </div>
                </form>
        
        </div>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script>window.jQuery || document.write('<script src="../resources/js/jquery-slim.min.js"><\/script>')</script>
        <script src="../resources/js/popper.min.js"></script>
        <script src="../resources/js/bootstrap.min.js"></script>
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
        $gyear = $_POST['gyear'];
        $street = $_POST['street'];
        $showstreet = $_POST['showStreet'];
        $city = $_POST['city'];
        $showcity = $_POST['showCity'];
        $state = $_POST['state'];
        $showstate = $_POST['showState'];
        $zipcode = $_POST['zipcode'];
        $showzipcode = $_POST['showZipcode'];
        $country = $_POST['country'];
        $showcountry = $_POST['showCountry'];
        $phonenumber = $_POST['phonenumber'];
        $showphonenumber = $_POST['showPhonenumber'];
        $email = $_POST['email'];
        $showemail = $_POST['showEmail'];
        $jobfield = $_POST['jobfield'];
        $showjobinfo = $_POST['showjobinfo'];
        

        
        /*echo $firstname;
        echo $lastname;
        echo $gyear;
        echo $street;
        echo $showstreet;
        echo $city;
        echo $showcity;
        echo $state;
        echo $zipcode;
        echo $showzipcode;
        echo $showstate;
        echo $country;
        echo $showcountry;
        echo $phonenumber;
        echo $showphonenumber;
        echo $email;
        echo $showemail;*/



        $sql = "SELECT userid FROM users WHERE username = '$indivUser'";
        $result = $conn->query($sql);
        $id;
        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
                $id = $row["userid"];
            
        } else {
            echo "0 results";
        }


        $stmt = $conn->prepare("UPDATE `alum_info` SET firstName = ?, lastName = ?, graduationYear = ? WHERE alumnitable_id = ?");
        $stmt->bind_param('ssii', $firstname, $lastname, $gyear, $id);
        $stmt->execute();
        $stmt->close();

        $stmt = $conn->prepare("UPDATE `alum_info` SET street = ?, city = ?, currentstate = ?, zipcode = ?, country = ? WHERE alumnitable_id = ?");
        $stmt->bind_param('sssssi', $street, $city, $state, $zipcode, $country, $id);
        $stmt->execute();
        $stmt->close();
        
        $stmt = $conn->prepare("UPDATE `alum_info` SET phoneNumber = ?, email = ?, jobfield = ? WHERE alumnitable_id = ?");
        $stmt->bind_param('sssi', $phonenumber, $email, $jobfield, $id);
        $stmt->execute();
        $stmt->close();

        $stmt = $conn->prepare("UPDATE `alum_info` SET showStreet = ?, showCity = ?, showState = ?, showZip = ?, showPhone = ?, showEmail = ?, showjobinfo = ? WHERE alumnitable_id = ?");
        $stmt->bind_param('iiiiiiii', $showstreet, $showcity, $showstate, $showzipcode, $showphonenumber, $showemail, $showjobinfo, $id);
        $stmt->execute();
        $stmt->close();



        echo "success";

        readfile("redirect.html");
    }
    else{
        echo "";
    }
    
?>