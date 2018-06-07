<form>
<input type="button" value="Put Your Text Here" onclick="window.location.href='https://alumdb.mamaroneckschoolsfoundation.org/chat/convo.html'" />
</form>
<?
ini_set('display_errors', 1);
include('../php/rds.php');
include("../php/signal.class.php");
include("../php/auth.php");
session_start();
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

$sql = "SELECT userid FROM users WHERE username = '$indivUser'";
$result = $conn->query($sql);
$id;
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $id = $row["userid"];

    } else {
        echo "0 results";
    }

echo $id;
echo $indivUser;
$stmt = $conn->prepare("SELECT * FROM `s_chat_messages` WHERE user = ?");
$stmt->bind_param('s', $indivUser);
$stmt->execute();
$res = $stmt->get_result();
$stmt->close();
$num_rows = $res->num_rows;
if ($num_rows > 0) {
    // output data of each row

    $tablecode = "<table class=\"table table-hover\"><thead><tr><th>From User</th><th>Message</th><th>Time Received</th></tr></thead><tbody>";
    while($row = $res->fetch_assoc()) {
        //rename all to chat id
        $tablecode = $tablecode . '<tr><td><a href="https://alumdb.mamaroneckschoolsfoundation.org/chat/chat_begin.php?chatouser='  . $row["user"]. '">' . $row["user"]. '"></td></tr>';
    }
    $tablecode = $tablecode . "</tbody></table>";
}
echo $tablecode;


?>
