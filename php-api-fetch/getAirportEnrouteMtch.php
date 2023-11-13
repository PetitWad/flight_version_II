<?php
$apiKey = "e2B0ZmYZG71usQxrl9AxDweaKTJSnAg6";
$timezone = new DateTimeZone('America/Port-Au-Prince');
$currentDate = new DateTime('now', $timezone);

// Define an array of time intervals (e.g., two intervals for the same day)
$timeIntervals = array(
    array('00:00:00', '11:59:59'),
    array('12:00:00', '23:59:59')
);

$response_enroute_cap = array();

foreach ($timeIntervals as $interval) {
    $startTime = clone $currentDate;
    $startTime->setTime(explode(':', $interval[0])[0], explode(':', $interval[0])[1]);

    $endTime = clone $currentDate;
    $endTime->setTime(explode(':', $interval[1])[0], explode(':', $interval[1])[1]);

    $startTime = $startTime->format('c');
    $endTime = $endTime->format('c');

    $url = "https://aeroapi.flightaware.com/aeroapi/airports/MTCH/flights/scheduled_arrivals?start={$startTime}&end={$endTime}";

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
            foreach ($data['scheduled_arrivals'] as $arrival) {
                $datetime = new DateTime($arrival['estimated_on'], new DateTimeZone('UTC'));
                $datetime->setTimezone(new DateTimeZone('America/Port-Au-Prince'));
                $formatted_time = $datetime->format("d-m-Y h:i A");

                $newData[] = array(
                    'airlineCode' => $arrival['operator'],
                    'flightNumber' => $arrival['ident'],
                    'origin' => $arrival['origin']['city'],
                    'time' => $formatted_time,
                    'status' => $arrival['status']
                );
            }

            // Save data to a temporary array
            $response_enroute_cap = $newData;
        } else {
            echo "Erreur lors du décodage JSON.";
        }
    } else {
        echo "Erreur lors de la requête cURL.";
    }
}
