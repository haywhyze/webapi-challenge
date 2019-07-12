const actionModel = require('../data/helpers/actionModel');

class Actions {
  static async getAll(req, res) {
    try {
      console.log('object');
      const actions = await actionModel.get();
      if (actions.length) return res.status(200).send(actions);
      return res.status(200).send({ message: 'No actions to display' });
    } catch (error) {
      console.log(error);
      return res.status(500).send({
        error: 'The actions information could not be retrieved.',
      });
    }
  }

  static async getOne(req, res) {
    return res.status(200).send(req.action);
  }

  static async remove(req, res) {
    try {
      const deleteResponse = await actionModel.remove(req.action.id);
      if (deleteResponse === 1) {
        return res.status(200).json({
          message: 'Action deleted successfully',
        });
      }
      return res.status(500).json({
        message: 'Server Error',
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        error: 'The action could not be removed',
      });
    }
  }
}

module.exports = Actions;
