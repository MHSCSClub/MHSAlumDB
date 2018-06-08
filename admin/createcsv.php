<?php
function makeCSV($html){
header('Content-type: application/ms-excel');
header('Content-Disposition: attachment; filename=sample.csv');

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
