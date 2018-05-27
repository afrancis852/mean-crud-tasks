'use strict'

// Importo el modelo Task
const Task = require('../models/task');

// Recupero las tareas de la Base de Datos
function getTasks(req, res) {
	Task.find({}, (err, tasks) => {
		if(err)	return res.status(500).send({ message: `Error al realizar la petición: ${err}` });
		res.json(tasks);
	});
};

// Almaceno una tarea en la Base de Datos
function saveTask(req, res) {
	// Creo una tarea con los datos de la peticion
	let task = new Task();
	task.title = req.body.title;
	task.isDone = req.body.isDone;

	// Almaceno la tarea creada
	task.save((err, taskStored) => {
		if(err) res.status(500).send({ message: `Error al guardar en la base de datos: ${err}` });
		res.json(taskStored);
	});
};

// Actualizo una tarea en la Base de Datos
function updateTask(req, res) {
    // Recupero los datos de la peticion
	let taskID = req.params.taskID;
	let update = req.body;

    // Actualizo la tarea
	Task.findByIdAndUpdate(taskID, update, {new: true}, (err, taskUpdated) => {
		if(err) res.status(500).send({ message: `Error al actualizar la tarea con ID ${taskID}` });
		res.json(taskUpdated);
	});
};

// Elimino una tarea de la Base de Datos
function removeTask(req, res) {
    // Recupero los datos de la peticion
	let taskID = req.params.taskID;

	Task.findById(taskID, (err, task) => {
		if(err) res.status(500).send({ message: `Error al eliminar la tarea: ${err}` });
		task.remove(err => {
			if(err) res.status(500).send({ message: `Error al eliminar la tarea: ${err}` });
			res.json(true);
		});
	});
};

// Exporto las funciones del controlador de tarea
module.exports = {
	getTasks,
	saveTask,
	updateTask,
	removeTask
};