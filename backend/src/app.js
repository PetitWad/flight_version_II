const express = require('express');
const cors = require('cors');
const arrivalsRts = require('./routes/arrivalsRts');
const departuresRts = require('./routes/departuresRts');


const app = express();
const port = 5000;


app.use(cors()); // Utilisation du middleware CORS avec des options spécifiques

app.use('/api', arrivalsRts);
app.use('/api', departuresRts);

app.listen(port, () => {
    console.log(`Serveur écoutant sur le port ${port}`);
});
