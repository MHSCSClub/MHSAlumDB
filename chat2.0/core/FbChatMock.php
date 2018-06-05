<?php

class FbChatMock {

  // Holds the database connection
  private $dbConnection;

  //----- Database connection details --/
  //-- Change these to your database values

  private $_dbHost;

  private $_dbUsername;

  private $_dbPassword;

  public $_databaseName;

  //----- ----/

  /**
   * Create's the connection to the database and stores it in the dbConnection
   */
  public function __construct() {
    include("../php/signal.class.php");
    include("../php/auth.php");
    include('../php/rds.php');
    $this->_dbHost = $dbhost;
    $this->_databaseName = $dbname;
    $this->_dbUsername = $username;
    $this->_dbPassword = $password;

    $this->dbConnection = new mysqli($this->_dbHost, $this->_dbUsername,
        $this->_dbPassword, $this->_databaseName);

    if ($this->dbConnection->connect_error) {
      die('Connection error.');
    }
  }

  public function getMessages() {
    $messages = array();
    $query = "SELECT chat.message, chat.sent_on, message_users.id, message_users.username FROM message_users INNER JOIN chat ON chat.user_id = message_users.id ORDER BY sent_on";

    // Execute the query
    $resultObj = $this->dbConnection->query($query);
    if(!$resultObj){
      echo "sql query did not go through.";
    }
    // Fetch all the rows at once.
    while ($row = $resultObj->fetch_assoc()) {
      $messages[] = $row;
    }

    return $messages;
  }

  public function addMessage($userId, $message) {
    $addResult = false;

    $cUserId = (int) $userId;
    // Escape the message with mysqli real escape
    $cMessage = $this->dbConnection->real_escape_string($message);

    $query = <<<QUERY
      INSERT INTO `chat`(`user_id`, `message`, `sent_on`)
      VALUES ({$cUserId}, '{$cMessage}', UNIX_TIMESTAMP())
QUERY;

    $result = $this->dbConnection->query($query);

    if ($result !== false) {
      // Get the last inserted row id.
      $addResult = $this->dbConnection->insert_id;
    } else {
      echo $this->dbConnection->error;
    }

    return $addResult;
  }

}
