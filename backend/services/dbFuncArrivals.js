const connection = require('../db/dbConfig');

var currentDate = new Date();

// Formater la date au format "dd-mm-yyyy"
var day = ('0' + currentDate.getDate()).slice(-2);
var month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
var year = currentDate.getFullYear();

var formattedDate = day + '-' + month + '-' + year;

const insertArrivals = async (arrivals) => {

    const insertQuery = 'INSERT INTO arrivals (airline_code, flight, flight_from, status, estimate_arrive_time, cur_date) VALUES ?';

    const values = arrivals.map(arrival => [
        arrival.airlineCode,
        arrival.flightNumber,
        arrival.originCity,
        arrival.status,
        arrival.formattedTime,
        formattedDate,
    ]);

    return new Promise((resolve, reject) => {
        connection.query(insertQuery, [values], (error, results) => {
            if (error) {
                console.error('Erreur lors de l\'insertion des arrivées:', error);
                reject(error);
            } else {
                console.log('Arrivées insérées avec succès:', results);
                resolve(results);
            }
        });
    });
};

const deleteAllArrivals = async () => {
    const deleteQuery = 'DELETE FROM arrivals';

    return new Promise((resolve, reject) => {
        connection.query(deleteQuery, (error, results) => {
            if (error) {
                console.error('Erreur lors de la suppression des arrivées:', error);
                reject(error);
            } else {
                console.log('Toutes les arrivées ont été supprimées avec succès:', results);
                resolve(results);
            }
        });
    });
};

const getAllArrivalsFromDB = async () => {
    const selectQuery = 'SELECT * FROM arrivals';

    return new Promise((resolve, reject) => {
        connection.query(selectQuery, (error, results) => {
            if (error) {
                console.error('Erreur lors de la récupération des arrivées depuis la base de données:', error);
                reject(error);
            } else {
                console.log('Arrivées récupérées depuis la base de données avec succès:', results);
                resolve(results);
            }
        });
    });
};

module.exports = {
    insertArrivals,
    deleteAllArrivals,
    getAllArrivalsFromDB
};
