const projectModel = require('../data/helpers/projectModel');

class Projects {
  static async create(req, res) {
    const newProject = {
      name: req.body.name,
      description: req.body.description,
    };
    try {
      const newProjectId = await projectModel.insert(newProject);
      const newProjectData = await projectModel.get(newProjectId.id);
      return res.status(201).json(newProjectData);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        error: 'There was an error while saving the user to the database',
      });
    }
  }

  static async getAll(req, res) {
    try {
      const projects = await projectModel.get();
      if (projects.length) return res.status(200).send(projects);
      return res.status(200).send({ message: 'No projects to Display' });
    } catch (error) {
      console.log(error);
      return res.status(500).send({
        error: 'The project information could not be retrieved.',
      });
    }
  }

  static async getOne(req, res) {
    return res.status(200).send(req.project);
  }
}

module.exports = Projects;
