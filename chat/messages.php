<meta http-equiv="refresh" content="1000">
<?php
require_once('inc/chat.inc.php');
$oSimpleChat = new SimpleChat();
echo $oSimpleChat->getMessages();
?>
