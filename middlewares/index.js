const projectModel = require('../data/helpers/projectModel');
const actionModel = require('../data/helpers/actionModel');

async function validateId(req, res, next) {
  const id = Number(req.params.id);
  const endpoint = req.originalUrl.split('/')[2];
  console.log(id);
  if (Number.isNaN(id) || id % 1 !== 0 || id < 0) {
    return res.status(400).send({
      message: `invalid ${endpoint} id provided`,
    });
  }
  console.log(endpoint);
  try {
    let db;
    if (endpoint === 'actions') {
      console.log('yes');
      db = actionModel;
    } else {
      db = projectModel;
    }
    const data = await db.get(id);
    console.log(data);
    if (!data) {
      return res.status(400).send({
        message: `${endpoint} id provided does not exist`,
      });
    }
    if (endpoint === 'actions') {
      req.action = data;
    } else {
      req.project = data;
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      error: 'The information could not be retrieved.',
    });
  }
  return next();
}

function validateProject(req, res, next) {
  if (!Object.keys(req.body).length) {
    return res.status(400).send({
      message: 'missing project data',
    });
  }
  if (!req.body.name) {
    return res.status(400).send({
      message: 'missing required name field',
    });
  }
  if (!req.body.description) {
    return res.status(400).send({
      message: 'missing required description field',
    });
  }
  return next();
}

module.exports = {
  validateId,
  validateProject,
};