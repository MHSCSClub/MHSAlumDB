<?php

class DB {
	private static $instance;
	private $MySQLi;

	private function __construct(array $dbOptions){

		session_start();
	  ini_set('display_errors', 1);
	  include("../../../php/signal.class.php");
	  include("../../../php/auth.php");
	  include('../../../php/rds.php');

	  $this->$MySQLi = new mysqli($dbhost, $username, $password, $dbname);
	  if ($this->$MySQLi->connect_error) {
	      die("Connection failed: " . $conn->connect_error);
	  }

		$this->MySQLi->set_charset("utf8");
	}

	public static function init(array $dbOptions){
		if(self::$instance instanceof self){
			return false;
		}

		self::$instance = new self($dbOptions);
	}

	public static function getMySQLiObject(){
		return self::$instance->MySQLi;
	}

	public static function query($q){
		return self::$instance->MySQLi->query($q);
	}

	public static function esc($str){
		return self::$instance->MySQLi->real_escape_string(htmlspecialchars($str));
	}
}

?>
