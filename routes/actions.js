const express = require('express');
const middlewares = require('../middlewares');
const ActionsController = require('../controller/Actions');

const actions = express.Router();

actions.post('/');

actions.get('/', ActionsController.getAll);

actions.get('/:id');

actions.put('/:id');

actions.delete('/:id');

module.exports = actions;
