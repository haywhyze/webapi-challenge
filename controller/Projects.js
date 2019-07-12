class Projects {
  static getAll(req, res) {
    res.status(200).send({
      data: 'Welcome to the Controllers',
    });
  }
}

module.exports = Projects;
