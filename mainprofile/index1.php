<!-- Redirect to userid selection at some point -->

<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="utf-8"></meta>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
    <meta name="description" content=""></meta>
    <meta name="author" content=""></meta>
    <link rel="shortcut icon" href="/favicon.ico" />

    <title>Alumni Database</title>
    <link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    <script src="//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js"></script>
    <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>

    <!-- Bootstrap Core CSS -->
    <link href="../css/bootstrap.min.css" rel="stylesheet"></link>

    <!-- Theme CSS -->
    <link href="../css/freelancer.min.css" rel="stylesheet"></link>
	<!-- Custom CSS -->
	<link href="../css/style.css" rel="stylesheet"></link>
    <!-- Custom Fonts -->
    <link href="../vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css"></link>
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css"></link>
    <link href="https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic" rel="stylesheet" type="text/css"></link>

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>

<body id="page-top" class="index">
    <!-- Navigation -->
    <nav id="mainNav" class="navbar navbar-default navbar-fixed-top navbar-custom">
      <div class="container">
        <div class="navbar-header page-scroll">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span class="sr-only">Toggle navigation</span> Menu <i class="fa fa-bars"></i>
            </button>
            <header>
            <a class="navbar-brand" href="#page-top">Mamaroneck Alumni Database</a>
            </header>
            <?php
                session_start();
                ini_set('display_errors', 1);
                include ('../php/rds.php');
                $conn = new mysqli($dbhost, $username, $password, $dbname);
                if ($conn->connect_error) {
                    die("Connection failed: " . $conn->connect_error);
                }
                $indivUser = $_SESSION['individual'];
                echo "Welcome '" . $indivUser . "'";
                //echo '<div style="Color::white">"Welcome "'. $indivUser ' </span>';

                $sql = "SELECT userid FROM users WHERE username = '$indivUser'";
                $result = $conn->query($sql);


                $id;
                if ($result->num_rows > 0) {
                    // output data of each row
                    while($row = $result->fetch_assoc()) {
                        $id = $row["userid"];
                        echo "id: " . $id . "<br>";
                    }
                } else {
                    echo "0 results";
                }
                echo $id;
                $query = "SELECT firstName, lastName, state, country, graduationYear FROM `alum_info` WHERE alumnitable_id = " . $id;
                $result = $conn->query($query);
                $num_rows = $result->num_rows;
                //var_dump($result);

                if ($num_rows == 1) {
                    // assign info in array to variables
                    $row = $result->fetch_assoc();
                    $firstname= $row["firstName"];
                    $lastname= $row["lastName"];
                    $state= $row["state"];
                    $country= $row["country"];
                    $gyear = $row["graduationYear"];
                    /*$tablecode = "<table class=\"table\" id=\"table\" style=\"width:100%\" border=\"1\"><thead><tr><th>Firstname</th><th>Lastname</th><th>State</th><th>Country</th></tr></thead><tbody>";
                    $tablecode = $tablecode . "<tr><td>" . $row["firstName"]. "</td><td>" . $row["lastName"]. "</td><td>" . $row["state"]. "</td><td>" . $row["country"]. "</td></tr>";
                    echo  $tablecode = $tablecode . "</tbody></table>";*/
                }
                else{
                    trigger_error("error");
                }
                echo $firstname;
                echo $lastname;
                echo $state;
                echo $country;
                echo $gyear;

                $conn->close();
            ?>
        </div>
    <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-6">
            <div class="well well-sm">
                <div class="row">
                    <div class="col-sm-6 col-md-4">
                        <img src="http://placehold.it/380x500" alt="" class="img-rounded img-responsive" />
                    </div>
                    <div class="container-fluid">
                        <h3>
                             <?php echo $firstname . " " . $lastname; ?></h3>
                        <small><cite title=<?php echo $state . ", " . $country; ?>><?php echo $state . ", " . $country; ?> <i class="glyphicon glyphicon-map-marker">
                        </i></cite></small>
                        <p>
                            <!--name-->
                            <i class="glyphicon glyphicon-group"></i><font size = "3"><?php echo " " . $firstname . " " . $lastname; ?></font>
                            <br />
                            <!--Email?-->
                            <i class="glyphicon glyphicon-globe"></i><font size = "3"><a href="http://www.jquery2dotnet.co">www.jquery2dotnet.com</a></font>
                            <br />
                            <!--Graduation year-->
                            <i class="glyphicon glyphicon-gift"></i><font size = "3"><?php echo " " . $gyear; ?></font></p>
                        <!-- Split button -->
                        <div class="btn-group">
                            <button type="button" class="btn btn-primary">
                                Social</button>
                            <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                                <span class="caret"></span><span class="sr-only">Social</span>
                            </button>
                            <input type=button onClick="window.location.href='editProfile.php'" value='click here'>
                            <ul class="dropdown-menu" role="menu">
                                <li><a href="#">Twitter</a></li>
                                <li><a href="https://plus.google.com/+Jquery2dotnet/posts">Google +</a></li>
                                <li><a href="https://www.facebook.com/jquery2dotnet">Facebook</a></li>
                                <li class="divider"></li>
                                <li><a href="#">Github</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
        <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->


            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    <li class="hidden">
                        <a href="#page-top"></a>
                    </li>
                    <li>
                        <a href="/auth/logout">Logout</a>
                    </li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container-fluid -->
    </nav>
    <section>
			<div class="container">
	            <div class="row">
                    <div class="col-lg-12">
                        <h3>Profile Page</h3>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-lg-offset-4">

                    </div>
                </div>
                <br>
                <div class="row">
                    <div class="col-lg-12">

    <hr>
    </div>
    </div>
    </div>
    </section>
    <!-- Scroll to Top Button (Only visible on small and extra-small screen sizes) -->
    <div class="scroll-top page-scroll hidden-sm hidden-xs hidden-lg hidden-md">
    <a class="btn btn-primary" href="#page-top">
    <i class="fa fa-chevron-up"></i>
    </a>
    </div>

<script>
//http://stackoverflow.com/questions/5448545/how-to-retrieve-get-parameters-from-javascript
function findGetParameter(parameterName) {
var result = null,
tmp = [];
var items = location.search.substr(1).split("&");
for (var index = 0; index < items.length; index++) {
tmp = items[index].split("=");
if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
}
return result;
}

document.getElementById('search').value=findGetParameter(search);
</script>

</body>

</html>