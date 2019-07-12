const projectModel = require('../data/helpers/projectModel');

class Projects {
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
