<?php
// Enable error reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Include the files with the fetching and processing logic
include 'getAirportScheduled.php';
include 'getAirportEnRoute.php';
include 'getAirportScheduledMtch.php';
include 'getAirportEnrouteMtch.php';

// Save data to MTPP_PAP_ CSV file
$date = date('M');
$data_pap = __DIR__ . "/repport_file/MTPP_PAP_{$date}.csv";
$pointer_pap = fopen($data_pap, 'a');

// save data to MTCH_CAP CSV file
$data_cap = __DIR__ . "/repport_file/MTCH_CAP_{$date}.csv";
$pointer_cap = fopen($data_cap, 'a');

// Save scheduled departures data to CSV
foreach ($response_scheduled as $value) {
    fputcsv($pointer_pap, array_merge($value, ['Type' => 'Scheduled']));
}

// Save enroute Arrivals data to CSV
foreach ($response_enroute as $value) {
    fputcsv($pointer_pap, array_merge($value, ['Type' => 'EnRoute']));
}

// Save scheduled departures cap data to CSV
foreach ($response_scheduled_cap as $value) {
    fputcsv($pointer_cap, array_merge($value, ['Type' => 'Scheduled']));
}

// Save enroute Arrivals data cap to CSV
foreach ($response_enroute_cap as $value) {
    fputcsv($pointer_cap, array_merge($value, ['Type' => 'EnRoute']));
}



fclose($pointer_pap);
fclose($pointer_cap);

echo "Data has been saved successfull...";
