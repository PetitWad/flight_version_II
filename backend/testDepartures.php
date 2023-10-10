<?php
// Configuration de l'URL de votre API
$api_url = 'http://localhost/php-api-fetch/src/api/allDepartures.php';

// Utilisation de cURL pour faire une requête GET à votre API
$ch = curl_init($api_url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
$http_status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

// Vérification du code de réponse HTTP
if ($http_status === 200) {
    // Conversion de la réponse JSON en tableau associatif
    $data = json_decode($response, true);

    if (!empty($data)) {
        // Affichage des données de l'API
        echo '<h1>Liste des Departures</h1>';
        echo '<table>';
        echo '<tr><th>ID</th><th>Code de la compagnie</th><th>Numéro de vol</th><th>Provenance</th><th>Statut</th><th>Heure d\'arrivée estimée</th><th>Date actuelle</th></tr>';
        
        foreach ($data[0] as $arrival) {
            echo '<tr>';
            echo '<td>' . $arrival['id'] . '</td>';
            echo '<td>' . $arrival['airline_code'] . '</td>';
            echo '<td>' . $arrival['flight'] . '</td>';
            echo '<td>' . $arrival['flight_to'] . '</td>';
            echo '<td>' . $arrival['status'] . '</td>';
            echo '<td>' . $arrival['estimate_arrive_time'] . '</td>';
            echo '<td>' . $arrival['cur_date'] . '</td>';
            echo '</tr>';
        }
        
        echo '</table>';
    } else {
        echo 'Aucune donnée à afficher.';
    }
} else {
    echo 'Erreur lors de la requête à l\'API. Code de statut HTTP : ' . $http_status;
}
?>
