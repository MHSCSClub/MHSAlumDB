<?php
header("Content-type: text/csv");
		 header("Content-Disposition: attachment; filename=file.csv");
		 header("Pragma: no-cache");
		 header("Expires: 0");
		 $data = array(
				 array("data12", "data16", "data17"),
				 array("data2", "data33", "data25"),
				 array("data31", "data32", "data23")
		 );
		 $file = fopen('php://output', 'w');
		 fputcsv($file, array('Description', 'Click', 'CTR'));
		 while ($data as $row) {
			 fputcsv($file, $row);
		 }
		 exit(); 
?>
