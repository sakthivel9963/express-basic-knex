const tableName = require('../../constants/tableNames');
const ExampleQueries = require('./example.queries');

class ExampleController {
  static async get(req, res, next) {
    try {
      const whereObj = req.query;
      const result = await ExampleQueries.find(tableName.user_role, whereObj);
      res.json({
        status: 200,
        message: result,
      });
    } catch (error) {
      next(error);
    }
  }

  static async findOne(req, res, next) {
    try {
      const { id } = req.params;
      const whereObj = { id };
      const result = await ExampleQueries.findOne(
        tableName.user_role,
        whereObj
      );
      res.json({
        status: 200,
        message: result,
      });
    } catch (error) {
      next(error);
    }
  }

  static async count(req, res, next) {
    try {
      const result = await ExampleQueries.count(tableName.user_role);
      res.json({
        status: 200,
        message: result,
      });
    } catch (error) {
      next(error);
    }
  }

  static async save(req, res, next) {
    try {
      const saveObj = req.body;
      const result = await ExampleQueries.save(tableName.user_role, saveObj);
      res.json({
        status: 200,
        message: result,
      });
    } catch (error) {
      next(error);
    }
  }

  static async update(req, res, next) {
    try {
      const updateObj = req.body;
      const { id } = req.params;
      const whereObj = { id };
      const result = await ExampleQueries.update(
        tableName.user_role,
        updateObj,
        whereObj
      );
      res.json({
        status: 200,
        message: result,
      });
    } catch (error) {
      next(error);
    }
  }

  static async delete(req, res, next) {
    try {
      const { id } = req.params;
      const deleteObj = { id };
      const result = await ExampleQueries.delete(
        tableName.user_role,
        deleteObj
      );
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
