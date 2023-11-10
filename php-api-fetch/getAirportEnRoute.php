<?php
require 'vendor/autoload.php'; // Include the Composer autoloader

use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;

include 'src/config/connection.php';
include 'src/models/Arrivals.php';

$apiKey = "e2B0ZmYZG71usQxrl9AxDweaKTJSnAg6";
$fxmlUrl = "https://aeroapi.flightaware.com/aeroapi/";

$timezone = new DateTimeZone('America/Port-Au-Prince');
$currentDate = new DateTime('now', $timezone);

// Define an array of time intervals (e.g., two intervals for the same day)
$timeIntervals = array(
    array('00:00:00', '11:59:59'),
    array('12:00:00', '23:59:59')
);

$response = array();

foreach ($timeIntervals as $interval) {
    $startTime = clone $currentDate;
    $startTime->setTime(explode(':', $interval[0])[0], explode(':', $interval[0])[1]);

    $endTime = clone $currentDate;
    $endTime->setTime(explode(':', $interval[1])[0], explode(':', $interval[1])[1]);

    $startTime = $startTime->format('c');
    $endTime = $endTime->format('c');

    $url = "https://aeroapi.flightaware.com/aeroapi/airports/MTPP/flights/scheduled_arrivals?start={$startTime}&end={$endTime}";

    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array('x-apikey: ' . $apiKey));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);

    if ($result = curl_exec($ch)) {
        curl_close($ch);
        $data = json_decode($result, true);

        if ($data !== null) {
            foreach ($data['scheduled_arrivals'] as $arrival) {

                $datetime = new DateTime($arrival['estimated_on'], new DateTimeZone('UTC')); // Create a DateTime object from the ISO 8601 time
                $datetime->setTimezone(new DateTimeZone('America/Port-Au-Prince')); // Set the time zone to your local time zone (e.g., 'America/New_York')
                $formatted_time = $datetime->format("h:i A"); // Format the DateTime object as time with AM or PM

                $response[] = array(
                    'airlineCode' => $arrival['operator'],
                    'flightNumber' => $arrival['ident'],
                    'origin' => $arrival['origin']['city'],
                    'time' => $formatted_time, // You need to set $formatted_time here
                    'status' => $arrival['status']
                );
            }
        } else {
            echo "Erreur lors du décodage JSON.";
        }
    } else {
        echo "Erreur lors de la requête cURL.";
    }
}

// Create a new spreadsheet
$spreadsheet = new Spreadsheet();

// Create a new worksheet
$worksheet = $spreadsheet->getActiveSheet();

// Set headers
$worksheet->setCellValue('A1', 'Airline Code');
$worksheet->setCellValue('B1', 'Flight Number');
$worksheet->setCellValue('C1', 'Origin');
$worksheet->setCellValue('D1', 'Time');
$worksheet->setCellValue('E1', 'Status');

// Start from the second row (row 2) to insert data
$row = 2;
foreach ($response as $arrival) {
    $worksheet->setCellValue('A' . $row, $arrival['airlineCode']);
    $worksheet->setCellValue('B' . $row, $arrival['flightNumber']);
    $worksheet->setCellValue('C' . $row, $arrival['origin']);
    $worksheet->setCellValue('D' . $row, $arrival['time']);
    $worksheet->setCellValue('E' . $row, $arrival['status']);
    $row++;
}

// Generate a unique filename based on the current date
$filename = 'arrivals_flight_data_' . $currentDate->format('Y-m-d_H-i-s') . '.xlsx';

// Save the spreadsheet to the generated filename
$writer = new Xlsx($spreadsheet);
$writer->save($filename);

echo "Data has been saved to $filename";
