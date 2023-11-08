<?php

include 'src/config/connection.php';
include 'src/models/Arrivals.php';

$response = [];

// date_default_timezone_set("America/Port-au-Prince");
$apiKey = "e2B0ZmYZG71usQxrl9AxDweaKTJSnAg6";
$fxmlUrl = "https://aeroapi.flightaware.com/aeroapi/";


$timezone = new DateTimeZone('America/Port-Au-Prince');  // Set the time zone (e.g., for the Port-Au-Prince)
$currentDate = new DateTime('now', $timezone); // Get the current date in your specified time zone

$startTime = clone $currentDate; // Set the start time to 12:00 AM (midnight)
$startTime->setTime(0, 0);

$endTime = clone $currentDate;  // Set the end time to 11:59 PM 
$endTime->setTime(23, 59);

// Format the dates in ISO 8601 format
$startTime = $startTime->format('c'); // Start time
$endTime = $endTime->format('c'); // End time


$url = "https://aeroapi.flightaware.com/aeroapi/airports/MTPP/flights/scheduled_arrivals?start={$startTime}&end={$endTime}";

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_HTTPHEADER, array('x-apikey: ' . $apiKey));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);

if ($result = curl_exec($ch)) {
    curl_close($ch);

    // Décodez le résultat JSON en un tableau PHP
    $data = json_decode($result, true);

    if ($data !== null) {
        // Parcourez les éléments "arrivals" du tableau
        // foreach ($data['scheduled_arrivals'] as $arrival) {

        // 	$airline_code = $arrival['operator'];
        // 	$ident = $arrival['ident'];
        // 	$originCity = $arrival['origin']['city'];

        // 	// Create a DateTime object from the ISO 8601 time
        // 	$datetime = new DateTime($arrival['estimated_on'], new DateTimeZone('UTC'));
        // 	// Set the time zone to your local time zone (e.g., 'America/New_York')
        // 	$datetime->setTimezone(new DateTimeZone('America/Port-Au-Prince'));
        // 	// Format the DateTime object as time with AM or PM
        // 	$formatted_time = $datetime->format("h:i A");

        // 	$status = $arrival['status'];

        //     $response['fidsData']['airlineCode']  = $airline_code;
        //     $response['fidsData']['flightNumber']  = $ident;
        // 	$response['fidsData']['origin']  = $originCity;
        // 	$response['fidsData']['time']  = $formatted_time;
        // 	$response['fidsData']['status']  = $status;

        // }
        $response = array();

        foreach ($data['scheduled_arrivals'] as $arrival) {

            $airline_code = $arrival['operator'];
            $ident = $arrival['ident'];
            $originCity = $arrival['origin']['city'];

            // Create a DateTime object from the ISO 8601 time
            $datetime = new DateTime($arrival['estimated_on'], new DateTimeZone('UTC'));
            // Set the time zone to your local time zone (e.g., 'America/New_York')
            $datetime->setTimezone(new DateTimeZone('America/Port-Au-Prince'));
            // Format the DateTime object as time with AM or PM
            $formatted_time = $datetime->format("h:i A");

            $airline_code = $arrival['operator'];
            $flight_number = $arrival['ident'];
            $origin_city = $arrival['origin'];
            $formatted_time = $formatted_time;
            $status = $arrival['status'];

            $response['fidsData']['airlineCode'] = $airline_code;
            $response['fidsData']['flightNumber'] = $flight_number;
            $response['fidsData']['origin'] = $origin_city;
            $response['fidsData']['time'] = $formatted_time;
            $response['fidsData']['status'] = $status;
        }

        // Convertir le tableau de réponse en JSON
        $response_json = json_encode($response);

        // Afficher le résultat
        echo $response_json;
    } else {
        echo "Erreur lors du décodage JSON.";
    }
} else {
    echo "Erreur lors de la requête cURL.";
}
print_r(json_encode($response));
