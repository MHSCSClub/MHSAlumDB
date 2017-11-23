<body id="page-top" class="individualalumni.php">
    <!-- Navigation -->
    <nav id="mainNav" class="navbar navbar-default navbar-fixed-top navbar-custom">
        <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header page-scroll">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span> Menu <i class="fa fa-bars"></i>
                </button>
                <header>
                <a class="navbar-brand" href="#page-top">Mamaroneck Alumni Database</a>
                </header>
            </div>
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
    <?php
        include ('../php/rds.php');
        $conn = new mysqli($dbhost, $username, $password, $dbname);
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        $alumnitable_id = $_POST["alumniid"];
        $query = "SELECT state,country FROM `alum_info` WHERE alumnitable_id = " . $alumnitable_id;
        $result = $conn->query($query); 
        $num_rows = $result->num_rows;
        if ($num_rows == 1) { 
            // output data of each row
            echo(row["state"]);
            echo(row["country"]);
        }
        else{
            trigger_error("error");
        }

    ?>
</body>
        