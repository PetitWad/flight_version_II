<?php
require 'vendor/autoload.php'; // Include the Composer autoloader

use PhpOffice\PhpSpreadsheet\IOFactory;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;

include 'src/config/connection.php';
include 'src/models/Departures.php';

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

    $url = "https://aeroapi.flightaware.com/aeroapi/airports/MTPP/flights/scheduled_departures?start={$startTime}&end={$endTime}";

    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array('x-apikey: ' . $apiKey));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);

    if ($result = curl_exec($ch)) {
        curl_close($ch);
        $data = json_decode($result, true);

        if ($data !== null) {
            // Initialize $newData as an empty array
            $newData = [];

            // Append new data to $newData
            foreach ($data['scheduled_departures'] as $departure) {
                $datetime = new DateTime($departure['estimated_on'], new DateTimeZone('UTC'));
                $datetime->setTimezone(new DateTimeZone('America/Port-Au-Prince'));
                $formatted_time = $datetime->format("h:i A");

                $newData[] = array(
                    'airlineCode' => $departure['operator'],
                    'flightNumber' => $departure['ident'],
                    'destination' => $departure['destination']['city'],
                    'time' => $formatted_time,
                    'status' => $departure['status']
                );
            }

            // Append $newData to $response
            $response = array_merge($response, $newData);
        } else {
            echo "Erreur lors du décodage JSON.";
        }
    } else {
        echo "Erreur lors de la requête cURL.";
    }
}

// Check if the Excel file exists or create a new spreadsheet
if (file_exists('departures_flight_data.xlsx')) {
    // Load the existing Excel file
    $spreadsheet = IOFactory::load('departures_flight_data.xlsx');
} else {
    // Create a new spreadsheet
    $spreadsheet = new Spreadsheet();
}

// Always create a new worksheet, whether the spreadsheet is new or existing
$worksheet = $spreadsheet->getActiveSheet();

if ($worksheet->getHighestRow() === 1) {
    // Add headers only if it's a new worksheet
    $worksheet->setCellValue('A1', 'Airline Code');
    $worksheet->setCellValue('B1', 'Flight Number');
    $worksheet->setCellValue('C1', 'Destination');
    $worksheet->setCellValue('D1', 'Time');
    $worksheet->setCellValue('E1', 'Status');
}

// Start from the next available row to insert new data
$row = $worksheet->getHighestRow() + 1;

foreach ($response as $departure) {
    $worksheet->setCellValue('A' . $row, $departure['airlineCode']);
    $worksheet->setCellValue('B' . $row, $departure['flightNumber']);
    $worksheet->setCellValue('C' . $row, $departure['destination']);
    $worksheet->setCellValue('D' . $row, $departure['time']);
    $worksheet->setCellValue('E' . $row, $departure['status']);
    $row++;
}

// Save the updated spreadsheet to the same file
$writer = new Xlsx($spreadsheet);
$writer->save('departures_flight_data.xlsx');

echo "Data has been saved to departures_flight_data.xlsx";
?>
