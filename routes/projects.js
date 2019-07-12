const express = require('express');
const middlewares = require('../middlewares');
const ProjectsController = require('../controller/Projects');

const projects = express.Router();

projects.post('/', middlewares.validateProject, ProjectsController.create);

projects.post('/:id/action', middlewares.validateId, middlewares.validateAction, ProjectsController.createAction);

projects.get('/', ProjectsController.getAll);

projects.get('/:id', middlewares.validateId, ProjectsController.getOne);

projects.get('/:id/actions', middlewares.validateId, ProjectsController.getActions);

projects.put('/:id', middlewares.validateId, ProjectsController.update);

projects.delete('/:id', middlewares.validateId, ProjectsController.remove);

module.exports = projects;
