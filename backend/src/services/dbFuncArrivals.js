const connection = require('../src/db/dbConfig');

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
                console.error('Error during Arrival insertion:', error);
                reject(error);
            } else {
                console.log('Arrivals inserted successfully:', results);
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
                console.error('Error during Arrival deletion:', error);
                reject(error);
            } else {
                console.log('All Arrivals deleted successfully:', results);
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
                console.error('Error during retrieval of Arrivals from the database:', error);
                reject(error);
            } else {
                console.log('Arrivals retrieved successfully from the database:', results);
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
