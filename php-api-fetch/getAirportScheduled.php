<?php
$apiKey = "e2B0ZmYZG71usQxrl9AxDweaKTJSnAg6";
$timezone = new DateTimeZone('America/Port-Au-Prince');
$currentDate = new DateTime('now', $timezone);

// Define an array of time intervals (e.g., two intervals for the same day)
$timeIntervals = array(
    array('00:00:00', '11:59:59'),
    array('12:00:00', '23:59:59')
);

$response_scheduled = array();

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

            // Save data to a temporary array
            $response_scheduled = $newData;

        } else {
            echo "Erreur lors du décodage JSON.";
        }
    } else {
        echo "Erreur lors de la requête cURL.";
    }
}
?>
