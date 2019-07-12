const express = require('express');
const middlewares = require('../middlewares');
const ProjectsController = require('../controller/Projects');

const projects = express.Router();

projects.post('/');

projects.get('/', ProjectsController.getAll);

projects.get('/:id', middlewares.validateId, ProjectsController.getOne);

projects.put('/:id');

projects.delete('/:id');

module.exports = projects;
