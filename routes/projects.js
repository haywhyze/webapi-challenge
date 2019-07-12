const express = require('express');
const ProjectsController = require('../controller/Projects');

const projects = express.Router();

projects.post('/');

projects.get('/', ProjectsController.getAll);

projects.get('/:id');

projects.put('/:id');

projects.delete('/:id');

module.exports = projects;
