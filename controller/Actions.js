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
}

module.exports = Actions;
