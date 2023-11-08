<?php
date_default_timezone_set('America/Port-Au-Prince');
$curr_date = date('d-M-Y');
class Arrivals
{
    // Toutes les méthodes et propriétés nécessaires à la gestion des données de la tables etudiants
    private $table = "arrivals";
    private $connexion = null;

    // Les propritées de l'objet arrival
    public $id;
    public $airline_code;
    public $flight;
    public $flight_from;
    public $status;
    public $estimate_arrive_time;
    public $cur_date;

    public function __construct($db)
    {
        if ($this->connexion == null) {
            $this->connexion = $db;
        }
    }

    // Lecture des arrivals

    public function allArrivals()
    {
        global $curr_date;
        $sql = "SELECT id, airline_code, flight, flight_from, status, estimate_arrive_time, cur_date
                FROM $this->table";
        // On éxecute la requête
        $req = $this->connexion->query($sql);

        // On retourne le resultat
        return $req;
    }



    public function addArrivals($airline_code, $flight, $flight_from, $status, $estimate_arrive_time, $cur_date)
    {
    
            $addarrivals = $this->connexion->prepare("INSERT INTO `$this->table` (`airline_code`, `flight`, `flight_from`, `status`, `estimate_arrive_time`, `cur_date`) VALUES (:airline_code, :flight, :flight_from, :status, :estimate_arrive_time, :cur_date)");

            $addarrivals->bindParam(':airline_code', $airline_code);
            $addarrivals->bindParam(':flight', $flight);
            $addarrivals->bindParam(':flight_from', $flight_from);
            $addarrivals->bindParam(':status', $status);
            $addarrivals->bindParam(':estimate_arrive_time', $estimate_arrive_time);
            $addarrivals->bindParam(':cur_date', $cur_date);

            if ($addarrivals->execute()) {
                echo 'Data inserted successfully';
            } else {
                echo 'Data not inserted';
            }
    }


    public function deleteArrivals()
    {
        $delarrivals = $this->connexion->prepare("DELETE FROM  `$this->table`");
        if ($delarrivals->execute()) {
            echo 'Data deleted successfully';
        } else {
            echo 'Data not deleted';
        }
    }
}
