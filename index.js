const express = require('express');
const app = express();

require('./startup/routes')(app);
<<<<<<< HEAD
=======
require('./startup/config')();
>>>>>>> cf784656b39749252186ec27165ffd49c76a2057
const db = require('./models/index');

async function dbConnnect() {
    await db.sequelize.sync();
};

dbConnnect();

const port = process.env.PORT || 3000;
const server = app.listen(port, () => console.log(`Listening on port ${port}...`));

module.exports = server;