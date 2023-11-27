const express = require('express');
const cron = require('node-cron');
const departuresCtrl = require('../controllers/departuresCtrl');

const departuresRts = express.Router();

// Endpoint to get departure data from the database
departuresRts.get('/departures', async (req, res) => {
    const departures = await departuresCtrl.getDepartures();
    res.json(departures);
});

// Endpoint to manually refresh departure data
departuresRts.get('/post/departures', async (req, res) => {
    const departures = await departuresCtrl.postDepartures();
    res.json(departures);
});

// Cron job to refresh departure data every 30 minutes
cron.schedule('*/30 * * * *', async () => {
    try {
        await departuresCtrl.postDepartures();
        console.log('Departures cron job completed successfully.');
    } catch (error) {
        console.error('Error during departures cron job:', error.message);
    }
});

module.exports = departuresRts;
