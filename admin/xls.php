<?php
    ini_set('display_errors', 1);
    echo 'You have successfully logged into the admin page ';
    include( '../php/rds.php' );
    include("../php/signal.class.php");
    include("../php/auth.php");
    session_start();
    if(!isset($_COOKIE['alumdbauth_admin'])){
        echo "you do not have access to this page";
        // sleep for 3 seconds
        sleep(3);
        header("location: /auth/");
            exit;
    } else {
        $resp = auth::check_auth($_COOKIE['alumdbauth_admin']);
        if($resp->isError()){
            echo "you do not have access to this page";
            // sleep for 3 seconds
            sleep(3);
            header("location: /auth/");
            exit;
        }

    }
    include ('../php/rds.php');
    $conn = new mysqli($dbhost, $username, $password, $dbname);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    ?>
    <html>
        <body>
                <form class="form-inline my-2 my-lg-0" method="GET">
                    <input type="text" id="search" class="form-control mr-sm-2"  name="search" placeholder="Search for graduation year"/>
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit" value="Submit">Search</button>
                </form>
</body>
</html>
<?
                        echo "Welcome to the create file page";
                        $select = "SELECT firstName,lastName,email FROM `alum_info`";
                        $search_str = "";
                            if(isset($_GET['search'])) {
                                $search_str = $_GET['search'];
                                $query_parts = explode(" ", $search_str);
                                $cols = array("lastName", "firstName", "graduationYear");
                                $query_full = array();
                                foreach($query_parts as &$part){
                                    $subquery = array();
                                    $part = "'%" . mysqli_real_escape_string($conn, $part) . "%'";
                                    foreach($cols as &$col){
                                        $a = "({$col} LIKE {$part})";
                                        $subquery[] = $a;
                                    }
                                    $query_full[] = "(" . implode(" OR ", $subquery) . ")";
                                }
                                $userQuery = implode(" AND ", $query_full);
                                $select = $select . " WHERE " . $userQuery;
                            

                                $result = $conn->query($query);
                                $num_rows_full = $result->num_rows;

                            
                                $export = mysql_query ( $select ) or die ( "Sql error : " . mysql_error( ) );
                                
                                $fields = mysql_num_fields ( $export );
                                
                                for ( $i = 0; $i < $fields; $i++ )
                                {
                                    $header .= mysql_field_name( $export , $i ) . "\t";
                                }
                                
                                while( $row = mysql_fetch_row( $export ) )
                                {
                                    $line = '';
                                    foreach( $row as $value )
                                    {                                            
                                        if ( ( !isset( $value ) ) || ( $value == "" ) )
                                        {
                                            $value = "\t";
                                        }
                                        else
                                        {
                                            $value = str_replace( '"' , '""' , $value );
                                            $value = '"' . $value . '"' . "\t";
                                        }
                                        $line .= $value;
                                    }
                                    $data .= trim( $line ) . "\n";
                                }
                                $data = str_replace( "\r" , "" , $data );
                                
                                if ( $data == "" )
                                {
                                    $data = "\n(0) Records Found!\n";                        
                                }
                                
                                header("Content-type: application/octet-stream");
                                header("Content-Disposition: attachment; filename=year.xls");
                                header("Pragma: no-cache");
                                header("Expires: 0");
                                print "$header\n$data";
                                
                            }
                            else{
                                echo "type a year";
                            }
?>