const connection = require('../src/db/dbConfig');

var currentDate = new Date();

// Format the date as "dd-mm-yyyy"
var day = ('0' + currentDate.getDate()).slice(-2);
var month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
var year = currentDate.getFullYear();

var formattedDate = day + '-' + month + '-' + year;

const insertDepartures = async (departures) => {
    const insertQuery = 'INSERT INTO departures (airline_code, flight, flight_to, status, estimate_departure_time, cur_date) VALUES ?';

    const values = departures.map(departure => [
        departure.airlineCode,
        departure.flightNumber,
        departure.destinationCity,
        departure.status,
        departure.formattedTime,
        formattedDate,
    ]);

    return new Promise((resolve, reject) => {
        connection.query(insertQuery, [values], (error, results) => {
            if (error) {
                console.error('Error during departure insertion:', error);
                reject(error);
            } else {
                console.log('Departures inserted successfully:', results);
                resolve(results);
            }
        });
    });
};

const deleteAllDepartures = async () => {
    const deleteQuery = 'DELETE FROM departures';

    return new Promise((resolve, reject) => {
        connection.query(deleteQuery, (error, results) => {
            if (error) {
                console.error('Error during departure deletion:', error);
                reject(error);
            } else {
                console.log('All departures deleted successfully:', results);
                resolve(results);
            }
        });
    });
};

const getAllDeparturesFromDB = async () => {
    const selectQuery = 'SELECT * FROM departures';

    return new Promise((resolve, reject) => {
        connection.query(selectQuery, (error, results) => {
            if (error) {
                console.error('Error during retrieval of departures from the database:', error);
                reject(error);
            } else {
                console.log('Departures retrieved successfully from the database:', results);
                resolve(results);
            }
        });
    });
};

module.exports = {
    insertDepartures,
    deleteAllDepartures,
    getAllDeparturesFromDB
};
