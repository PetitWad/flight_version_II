<?php
include 'src/config/connection.php';
include 'src/models/Departures.php'; // Assurez-vous d'inclure le modèle de départs approprié

date_default_timezone_set("America/New_York");
$cur_date = date('d-M-Y');
$username = "ataloums";
$apiKey = "f6713303b76c5942740a9c1a646a91abd43b65ba";
$fxmlUrl = "https://flightxml.flightaware.com/json/FlightXML3/";

$queryParams = array(
    'airport_code' => 'MTPP',
    'howMany' => 15,
    'filter' => 'airline'
);

$url = $fxmlUrl . 'AirportBoards?' . http_build_query($queryParams);
$ch = curl_init($url);

curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Authorization: Basic ' . base64_encode($username . ':' . $apiKey)
]);

curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

echo "<h2>Departures</h2>";
if ($result = curl_exec($ch)) {
    curl_close($ch);
    $flight_array = json_decode($result);

    $tableData = array();

    foreach ($flight_array->AirportBoardsResult->departures->flights as $value) {
        if (date("m/d/Y") == $value->estimated_departure_time->date) {
            $rowData = array(
                'airlineCode' => $value->airline,
                'flightNumber' => $value->flightnumber,
                'airlineLogoUrlPng' => "",
                'remarks' => $value->status,
                'city' => $value->destination->city,
                'currentDateTime' => $value->estimated_departure_time->time
            );

            $tableData[] = $rowData;
        }
    }

    // Vous pouvez maintenant imprimer le tableau au format HTML
    echo '<table>';
    echo '<thead><tr>';
    echo '<th>Compagnie aérienne</th>';
    echo '<th>Numéro de vol</th>';
    echo '<th>Logo de la compagnie aérienne</th>';
    echo '<th>Remarques</th>';
    echo '<th>Ville de destination</th>';
    echo '<th>Heure de départ estimée</th>';
    echo '</tr></thead>';
    echo '<tbody>';

   // Créez une instance de la classe Database
$database = new Database();

// Obtenez la connexion PDO
$conn = $database->getConnexion();

$departures = new Departures($conn);

foreach ($tableData as $rowData) {
    $departures->addDepartures($rowData['airlineCode'], $rowData['flightNumber'], $rowData['city'], $rowData['remarks'], $rowData['currentDateTime'], $cur_date);
    echo '<tr>';
    echo '<td>' . $rowData['airlineCode'] . '</td>';
    echo '<td>' . $rowData['flightNumber'] . '</td>';
    echo '<td>' . $rowData['airlineLogoUrlPng'] . '</td>';
    echo '<td>' . $rowData['remarks'] . '</td>';
    echo '<td>' . $rowData['city'] . '</td>';
    echo '<td>' . $rowData['currentDateTime'] . '</td>';
    echo '</tr>';
}

    echo '</tbody>';
    echo '</table>';
}
?>
