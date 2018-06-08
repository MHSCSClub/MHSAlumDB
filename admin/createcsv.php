<?php
function makeCSV($html){


$fp = fopen("php://output", "w");

foreach($html->find('tr') as $element)
{
    $td = array();
    foreach( $element->find('th') as $row)
    {
        $td [] = $row->plaintext;
    }
    fputcsv($fp, $td);

    $td = array();
    foreach( $element->find('td') as $row)
    {
        $td [] = $row->plaintext;
    }
    fputcsv($fp, $td);
  }
  fclose($fp);
}
  ?>
