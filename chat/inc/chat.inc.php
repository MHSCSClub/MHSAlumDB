<?php
// simple chat class
class SimpleChat {
    // DB variables
    var $sDbName;
    var $sDbUser;
    var $sDbPass;
    var $currUser;
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
        $this->userArray =
        $this->currUser = $_SESSION['individual'];
    }
    // adding to DB table posted message
    function acceptMessages() {
        if ($_COOKIE['member_name']) {
            if(isset($_POST['s_say']) && $_POST['s_message']) {
                //$sUsername = $_COOKIE['member_name'];
                //the host, name, and password for your mysql
                $conn = new mysqli($this->sDbhost, $this->sDbUser, $this->sDbPass, $this->sDbName);
                //select the database
                //mysql_select_db($this->sDbName);
                $sMessage = addslashes($_POST['s_message']);
                $stmt = "";
                if ($sMessage != '') {
                    $query = "INSERT INTO `s_chat_messages` SET `user`=?, `message`=?, `when`=UNIX_TIMESTAMP()";
                    $stmt = $conn->prepare($query);
                    $stmt->bind_param('ss', $currUser, $sMessage);
                    $stmt->execute();
                }
            }
        }
        ob_start();
        require_once('chat_input.html');
        $sShoutboxForm = ob_get_clean();
        return $sShoutboxForm;
    }
    function getMessages($user1, $user2) {
        $conn = new mysqli($this->sDbhost, $this->sDbUser, $this->sDbPass, $this->sDbName);

        //select the database
        //mysql_select_db($this->sDbName);
        $query = "SELECT * FROM `s_chat_messages` WHERE `user` = '$user1' OR `user` = '$user2' ORDER BY `when` ASC LIMIT 30";
        $vRes = $conn->query($query);
        $sMessages = '';
        // collecting list of messages
        if ($vRes) {
            echo "Getting messages";
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

    function check_auth() {
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

    }
}
?>
