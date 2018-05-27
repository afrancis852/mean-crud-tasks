'use strict'

//Importo Express
const express = require('express');
// Importo el controlador de tareas
const taskCtrl = require('../controllers/task');

// Creo el manejador de rutas
const api = express.Router();

// Defino una peticion GET para las tareas
api.get('/tasks', taskCtrl.getTasks);
// Defino una peticion POST para SOLA una tarea
api.post('/task', taskCtrl.saveTask);
// Defino una petición PUT para SOLA una tarea
api.put('/task/:taskID', taskCtrl.updateTask);
// Defino una peticion DELETE para SOLA una tarea
api.delete('/task/:taskID', taskCtrl.removeTask);

// Exporto las rutas de las tareas
module.exports = api;