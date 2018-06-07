<meta http-equiv="refresh" content="1000">
<?php
require_once('inc/chat.inc.php');
session_start();
$oSimpleChat = new SimpleChat();
$user1 = $oSimpleChat->currUser;
$user2 = 'pgarzamw3@gmail.com';
echo "Username: " . $user1;
$oSimpleChat->check_auth();
echo $oSimpleChat->getMessages($user1, $user2);
?>
