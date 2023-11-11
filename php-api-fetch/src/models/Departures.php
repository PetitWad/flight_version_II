<?php
date_default_timezone_set('America/Port-Au-Prince');
$curr_date = date('d-M-Y');
class Departures
{
    // Toutes les méthodes et propriétés nécessaires à la gestion des données de la table departures
    private $table = "departures";
    private $connexion = null;

    // Les propriétés de l'objet departure
    public $id;
    public $airline_code;
    public $flight;
    public $flight_to;
    public $status;
    public $estimate_arrive_time;
    public $cur_date;

    public function __construct($db)
    {
        if ($this->connexion == null) {
            $this->connexion = $db;
        }
    }

    // Lecture des départs
    public function allDepartures()
    {
        global $curr_date;
        $sql = "SELECT id, airline_code, flight, flight_to, status, estimate_arrive_time, cur_date
                FROM $this->table";
        // On éxecute la requête
        $req = $this->connexion->query($sql);

        // On retourne le resultat
        return $req;
    }

    public function addDepartures($airline_code, $flight, $flight_to, $status, $estimate_arrive_time, $cur_date) {
        $addDepartures = $this->connexion->prepare("INSERT INTO `$this->table` (`airline_code`, `flight`, `flight_to`, `status`, `estimate_arrive_time`, `cur_date`) VALUES (:airline_code, :flight, :flight_to, :status, :estimate_arrive_time, :cur_date)");
        
        $addDepartures->bindParam(':airline_code', $airline_code);
        $addDepartures->bindParam(':flight', $flight);
        $addDepartures->bindParam(':flight_to', $flight_to);
        $addDepartures->bindParam(':status', $status);
        $addDepartures->bindParam(':estimate_arrive_time', $estimate_arrive_time);
        $addDepartures->bindParam(':cur_date', $cur_date);

        if ($addDepartures->execute()) {
            echo 'Data inserted successfully';
        } else {
            echo 'Data not inserted';
        }
    }

    public function deleteDepartures(){
        $delDepartures = $this->connexion->prepare("DELETE FROM  `$this->table`");
        if ($delDepartures->execute()) {
            echo 'Data deleted successfully';
        } else {
            echo 'Data not deleted';
        }

    }
    
    
}
