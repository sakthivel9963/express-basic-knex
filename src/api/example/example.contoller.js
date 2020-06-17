const tableName = require('../../constants/tableNames');
const ExampleQueries = require('./example.queries');

class ExampleController {
  static async get(req, res, next) {
    try {
      const result = await ExampleQueries.find(tableName.user);
      res.json({
        status: 200,
        message: result,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ExampleController;
