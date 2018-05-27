'use strict'

// Importo Express
const express = require('express');
// Importo Body Parser
const bodyParser = require('body-parser');
// Importo cors
const cors = require('cors');
// Importo Path
const path = require('path');
// Importo mis rutas
const api = require('./routes/task');

// Creo mi APP
const app = express();

// Asocio los Middlewares a la APP
// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors
app.use(cors());

// Asocio las rutas a la APP
app.use('/api', api);

// Archivos estaticos
app.use(express.static(path.join(__dirname + '/..', '/client/dist/client')));

// Exporto la aplicacion
module.exports = app;