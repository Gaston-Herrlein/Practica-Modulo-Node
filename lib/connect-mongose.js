/* eslint-disable linebreak-style */
/* eslint-disable no-console */

const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connection.on('error', (err) => {
  console.log('Error de conexión', err);
});

mongoose.connection.once('open', () => {
  console.log('Conectado a MongoDB en', mongoose.connection.name);
});

mongoose.connect(process.env.ATLAS_DB_URI);

module.exports = mongoose.connection;
