<?php
// simple chat class
class SimpleChat {
    // DB variables
    var $sDbName;
    var $sDbUser;
    var $sDbPass;
    // constructor
    function SimpleChat() {
        //mysql_connect("localhost","username","password");
        include("../php/signal.class.php");
        include("../php/auth.php");
        include('../php/rds.php');
        $this->sDbhost = $dbhost;
        $this->sDbName = $dbname;
        $this->sDbUser = $username;
        $this->sDbPass = $password;
    }
    // adding to DB table posted message
    function acceptMessages() {
        if ($_COOKIE['member_name']) {
            if(isset($_POST['s_say']) && $_POST['s_message']) {
                $sUsername = $_COOKIE['member_name'];
                //the host, name, and password for your mysql
                $conn = new mysqli($dbhost, $username, $password, $dbname);
                //select the database
                mysql_select_db($this->sDbName);
                $sMessage = mysql_real_escape_string($_POST['s_message']);
                if ($sMessage != '') {
                    $query = "INSERT INTO `s_chat_messages` SET `user`='{$sUsername}', `message`='{$sMessage}', `when`=UNIX_TIMESTAMP()";
                    $result = $conn->query($query);
                }
            }
        }
        ob_start();
        require_once('chat_input.html');
        $sShoutboxForm = ob_get_clean();
        return $sShoutboxForm;
    }
    function getMessages() {
        $conn = new mysqli($dbhost, $username, $password, $dbname);
        //select the database
        mysql_select_db($this->sDbName);
        //returning the last 15 messages
        $query = "SELECT * FROM `s_chat_messages` ORDER BY `id` ASC LIMIT 15";
        $vRes = $conn->query($query);
        $sMessages = '';
        // collecting list of messages
        if ($vRes) {
            while($aMessages = $vRes->fetch_assoc()) {
                $sWhen = date("H:i:s", $aMessages['when']);
                $sMessages .= '<div class="message">' . $aMessages['user'] . ': ' . $aMessages['message'] . '<span>(' . $sWhen . ')</span></div>';
            }
        } else {
            $sMessages = 'DB error, create SQL table before';
        }
        $conn->close();
        ob_start();
        require_once('chat_begin.html');
        echo $sMessages;
        require_once('chat_end.html');
        return ob_get_clean();
    }
}
?>
