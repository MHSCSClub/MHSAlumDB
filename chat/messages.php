<meta http-equiv="refresh" content="1000">
<?php
require_once('inc/chat.inc.php');
// Temporary usernames
$user1 = $_SESSION['individual'];
$user2 = 'pgarzamw3@gmail.com';

$oSimpleChat = new SimpleChat();
$oSimpleChat->check_auth();
echo $oSimpleChat->getMessages($user1, $user2);
?>
