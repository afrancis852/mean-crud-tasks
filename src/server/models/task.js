'use strict'

// Importo Mongoose
const mongoose = require('mongoose');

// Importo Schema
const Schema = mongoose.Schema;

// Creo mi esquema TAREA
const TaskSchema = Schema({
	title: String,
	isDone: Boolean
});

// Exporto el esquema de tarea como Task
module.exports = mongoose.model('Task', TaskSchema);