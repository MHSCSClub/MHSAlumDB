<?php
//include("../php/signal.class.php");
//include("../php/auth.php");
// class SimpleLoginSystem
class SimpleLoginSystem {
    // variables
    var $aExistedMembers; // Existed members array
    // constructor
    function SimpleLoginSystem() {

    }
    function getLoginBox() {
        ob_start();
        session_start();
        require_once('login_form.html');
        $sLoginForm = ob_get_clean();
        $sLogoutForm = '<a href="'.$_SERVER['PHP_SELF'].'?logout=1">logout</a>';
        // Log out
        /*if ((int)$_REQUEST['logout'] == 1) {
            if (isset($_COOKIE['member_name']) && isset($_COOKIE['member_pass']))
                $this->simple_logout();
        }*/
        // Log in
        $username = $_SESSION['individual'];
        if ($_REQUEST['username'] && $_REQUEST['password']) {
            /*if ($this->check_login($_REQUEST['username'], $_REQUEST['password'])) {
                $this->simple_login($_REQUEST['username'], $_REQUEST['password']);*/
                return 'Hello ' . $username . '! ';
        } else {
            if ($_COOKIE['member_name'] && $_COOKIE['member_pass']) {
                //if ($this->check_login($_COOKIE['member_name'], $_COOKIE['member_pass'])) {
                //echo $_COOKIE['member_name'];
                return 'Hello ' . $username . '! ';
                //}
            }
            return $sLoginForm;
        }
    }
    /*function simple_login($sName, $sPass) {
        $this->simple_logout();
        $sMd5Password = MD5($sPass);
        $iCookieTime = time() + 24*60*60*30;
        setcookie("member_name", $sName, $iCookieTime, '/');
        $_COOKIE['member_name'] = $sName;
        setcookie("member_pass", $sMd5Password, $iCookieTime, '/');
        $_COOKIE['member_pass'] = $sMd5Password;
    }
    function simple_logout() {
        setcookie('member_name', '', time() - 96 * 3600, '/');
        setcookie('member_pass', '', time() - 96 * 3600, '/');
        unset($_COOKIE['member_name']);
        unset($_COOKIE['member_pass']);
    }*/
    function check_login($sName, $sPass) {
        if($_SERVER["REQUEST_METHOD"] == "POST") {
          $check = auth::login($_POST['username'], $_POST['password']);
          if($check->isError()){
            return false;
          }
          return true;
      }
    }
    function check_cookie($cName, $cPass){

    }
}
?>
