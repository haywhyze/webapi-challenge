const express = require('express');
const ActionsController = require('../controller/Projects');

const actions = express.Router();

actions.post('/');

actions.get('/', ActionsController.getAll);

actions.get('/:id');

actions.put('/:id');

actions.delete('/:id');

module.exports = actions;
