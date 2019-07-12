const projectModel = require('../data/helpers/projectModel');
const actionModel = require('../data/helpers/actionModel');

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
        error: 'There was an error while saving the project to the database',
      });
    }
  }

  static async getAll(req, res) {
    try {
      const projects = await projectModel.get();
      if (projects.length) return res.status(200).send(projects);
      return res.status(200).send({ message: 'No projects to display' });
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

  static async getActions(req, res) {
    try {
      const actions = await projectModel.getProjectActions(req.project.id);
      if (actions.length) return res.status(200).send(actions);
      return res.status(200).send({ message: 'No actions to display' });
    } catch (error) {
      console.log(error);
      return res.status(500).send({
        error: 'The project information could not be retrieved.',
      });
    }
  }

  static async update(req, res) {
    const updatedProject = {
      name: req.body.name,
      description: req.body.description,
      completed: false,
    };
    if (req.body.completed === 'true') updatedProject.completed = true;
    try {
      console.log(req.project.id, updatedProject);
      const updateResponse = await projectModel.update(req.project.id, updatedProject);
      if (updateResponse) return res.status(200).json(updateResponse);
      throw new Error();
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        error: 'There was an error while saving the user to the database',
      });
    }
  }

  static async remove(req, res) {
    try {
      const deleteResponse = await projectModel.remove(req.project.id);
      if (deleteResponse === 1) {
        return res.status(200).json({
          message: 'Project deleted successfully',
        });
      }
      return res.status(500).json({
        message: 'Server Error',
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        error: 'The project could not be removed',
      });
    }
  }

  static async createAction(req, res) {
    const newAction = {
      description: req.body.description,
      notes: req.body.notes,
      project_id: req.project.id,
    };
    try {
      const newActionId = await actionModel.insert(newAction);
      const newActionData = await actionModel.get(newActionId.id);
      return res.status(201).json(newActionData);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        error: 'There was an error while saving the project to the database',
      });
    }
  }
}

module.exports = Projects;
