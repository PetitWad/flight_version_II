const api = require('../services/getApiDepartures'); // Make sure to replace with the actual file path
const dbFunctions = require('../services/dbFuncDepartures'); // Make sure to replace with the actual file path

const postDepartures = async () => {
    const departures = await api.getAllDepartures();

    // Insert departures into the database while deleting old data first
    await dbFunctions.deleteAllDepartures();
    await dbFunctions.insertDepartures(departures);

    return departures;
};

const getDepartures = async () => {
    return await dbFunctions.getAllDeparturesFromDB();
};

module.exports = {
    postDepartures,
    getDepartures,
};
