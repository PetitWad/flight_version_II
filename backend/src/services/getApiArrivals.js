const axios = require('axios');
const { formatISO } = require('date-fns');

const apiKey = "e2B0ZmYZG71usQxrl9AxDweaKTJSnAg6";
const airportCode = "MTPP";

const getAllArrivals = async () => {
    const startTime = new Date();
    startTime.setHours(0, 0, 0, 0);

    const endTime = new Date();
    endTime.setHours(23, 59, 59, 999);

    const formattedStartTime = formatISO(startTime, { representation: 'complete' });
    const formattedEndTime = formatISO(endTime, { representation: 'complete' });

    const url = `https://aeroapi.flightaware.com/aeroapi/airports/${airportCode}/flights/scheduled_arrivals?start=${formattedStartTime}&end=${formattedEndTime}`;

    console.log('Request URL:', url);

    try {
        const response = await axios.get(url, {
            headers: {
                'x-apikey': apiKey,
            },
        });

        console.log('Request Headers:', response.config.headers);

        if (response.status === 200) {
            const data = response.data;

            if (data) {
                const arrivals = data.scheduled_arrivals.map(arrival => {
                    const airlineCode = arrival.operator;
                    const flightNumber = arrival.ident;
                    const originCity = arrival.origin.city;

                    const datetime = new Date(arrival.estimated_on);
                    const formattedTime = datetime.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

                    const status = arrival.status;

                    return {
                        airlineCode,
                        flightNumber,
                        originCity,
                        formattedTime,
                        status,
                    };
                });

                return arrivals;
            } else {
                console.log("Error decoding JSON. Response:", response.data);
                return [];
            }
        } else {
            console.log("Invalid response. Status:", response.status, "Response:", response.data);
            return [];
        }
    } catch (error) {
        console.log("Error during cURL request:", error.message);
        return [];
    }
};



module.exports = {
    getAllArrivals,
};
