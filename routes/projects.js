const express = require('express');
const middlewares = require('../middlewares');
const ProjectsController = require('../controller/Projects');

const projects = express.Router();

projects.post('/', middlewares.validateProject, ProjectsController.create);

projects.get('/', ProjectsController.getAll);

projects.get('/:id', middlewares.validateId, ProjectsController.getOne);

projects.put('/:id', middlewares.validateId, ProjectsController.update);

projects.delete('/:id', middlewares.validateId, ProjectsController.remove);

module.exports = projects;
