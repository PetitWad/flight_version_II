const axios = require('axios');
const { formatISO } = require('date-fns');

const apiKey = "e2B0ZmYZG71usQxrl9AxDweaKTJSnAg6";
const airportCode = "MTPP";

const getAllDepartures = async () => {
    const startTime = new Date();
    startTime.setHours(0, 0, 0, 0);

    const endTime = new Date();
    endTime.setHours(23, 59, 59, 999);

    const formattedStartTime = formatISO(startTime, { representation: 'complete' });
    const formattedEndTime = formatISO(endTime, { representation: 'complete' });

    const url = `https://aeroapi.flightaware.com/aeroapi/airports/${airportCode}/flights/scheduled_departures?start=${formattedStartTime}&end=${formattedEndTime}`;

    console.log('Request URL for Departures:', url);

    try {
        const response = await axios.get(url, {
            headers: {
                'x-apikey': apiKey,
            },
        });

        console.log('Request Headers for Departures:', response.config.headers);

        if (response.status === 200) {
            const data = response.data;

            if (data) {
                const departures = data.scheduled_departures.map(departure => {
                    const airlineCode = departure.operator;
                    const flightNumber = departure.ident;
                    const destinationCity = departure.destination.city;

                    const datetime = new Date(departure.estimated_on);
                    const formattedTime = datetime.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

                    const status = departure.status;

                    return {
                        airlineCode,
                        flightNumber,
                        destinationCity,
                        formattedTime,
                        status,
                    };
                });

                return departures;
            } else {
                console.log("Error decoding JSON for Departures. Response:", response.data);
                return [];
            }
        } else {
            console.log("Invalid response for Departures. Status:", response.status, "Response:", response.data);
            return [];
        }
    } catch (error) {
        console.log("Error during cURL request for Departures:", error.message);
        return [];
    }
};


module.exports = {
    getAllDepartures,
};
