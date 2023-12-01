const express = require('express');
const cron = require('node-cron');
const arrivalsCtrl = require('../controllers/arrivalsCtrl');

const arrivalsRts = express.Router();

// the End Points to get the data since the database and for refresh link manual
arrivalsRts.get('/arrivals', async (req, res) => { // get the data from database 
    const arrivals = await arrivalsCtrl.getArrivals();
    res.json(arrivals);
});

arrivalsRts.get('/post/arrivals', async (req, res) => { // refresh link manual
    const arrivals = await arrivalsCtrl.postArrivals();
    res.json(arrivals);
});


//cron job to refresh every an hour
cron.schedule('0 * * * *', async () => {
    try {
        await arrivalsCtrl.postArrivals();
        console.log('Cron job completed successfully.');
    } catch (error) {
        console.error('Error during cron job:', error.message);
    }
});

module.exports = arrivalsRts;
