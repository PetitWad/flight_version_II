<?php
include_once 'src/config/connection.php';
include 'src/models/Arrivals.php';

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
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);

if ($result = curl_exec($ch)) {
	curl_close($ch);

	// Décodez le résultat JSON en un tableau PHP
	$data = json_decode($result, true);

	$database = new Database();
	$conn = $database->getConnexion();
	$arrivalsDao = new Arrivals($conn);

	$cur_date = date('d-M-Y'); // current date 
	// Vérifiez si le décodage a réussi
	if ($data !== null) {
		$arrivalsDao->deleteArrivals(); // delete the data in database before insert the data each 30 minutes
		// Parcourez les éléments "arrivals" du tableau
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

			$status = $arrival['status'];
			echo "Operator: $airline_code, Flight Number: $ident, Origin: $originCity, Time: $formatted_time, Status: $status\n";
			$arrivalsDao->addArrivals($airline_code, $ident, $originCity, $status, $formatted_time, $cur_date);
		}
	} else {
		echo "Erreur lors du décodage JSON.";
	}
} else {
	echo "Erreur lors de la requête cURL.";
}

?>

