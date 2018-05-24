<!-- Redirect to userid selection at some point -->
<?php

echo "hello";
?>
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
                        <form method="post">
                        <p>
                            <!--name-->
                            <span class="glyphicon glyphicon-envelope"></span><<input type="text" name="email" placeholder="Email Address">
                            <br />
                            <!--Email?-->
                            <i class="glyphicon glyphicon-globe"></i><input type="text" name="firstname" placeholder="First Name">
                            <br />
                            <!--Graduation year-->
                            <i class="glyphicon glyphicon-gift"></i>

                        </p>
                        </form>
                        <!-- Split button -->
                          		<input type="text" name="lastname" placeholder="Last Name">
                          		<input type="text" name="gyear" placeholder="Graduation Year">
                    			<input type="submit" name="register" class="button button-submit" value="Register">
                        <div class="btn-group">
                            <!--add buttons-->

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