'use strict'

// Importo Moongose
const mongoose = require('mongoose');
// Importo mi configuracion
const config = require('./config');
// Importo mi APP
const app = require('./app');

// Establezco una conexión con la Base de Datos.
mongoose.connect(config.db, (err, res) => {
	if(err) {
		return console.log(`Error al conectar a la Base de Datos: ${err}`);
	}
	console.log('Se establecio una conexión con la Base de Datos tasks');

	// Establezco el puerto donde va a escuchar la APP
	app.listen(config.port, () => {
		console.log(`El servidor esta corriendo en el puerto ${config.port}`);
	});
});