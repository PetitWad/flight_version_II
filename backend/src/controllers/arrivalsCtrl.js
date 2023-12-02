const api = require('../services/getApiArrivals');
const dbFunctions = require('../services/dbFuncArrivals');

const postArrivals = async () => {
    const arrivals = await api.getAllArrivals();
    // Insérer des arrivées dans la base de données tout en supprimant d'abord les anciennes donnees
    await dbFunctions.deleteAllArrivals();
    await dbFunctions.insertArrivals(arrivals);

    return arrivals;
};

const getArrivals = async () => {
    return await dbFunctions.getAllArrivalsFromDB();
};

module.exports = {
    postArrivals,
    getArrivals,
};
