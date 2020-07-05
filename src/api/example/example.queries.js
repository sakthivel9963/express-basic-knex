const DefaultQueries = require('../default/default.queries');
// const connection = require('../../config/db');

class ExampleQueries extends DefaultQueries {
  // static find(tableName, whereObj = {}) {
  //   return connection.table(tableName).where(whereObj);
  // }
  // static findOne(tableName, whereObj) {
  //   return connection.table(tableName).where(whereObj);
  // }
  // static count(tableName) {
  //   return connection.table(tableName).count('*', { as: 'count' });
  // }
  // static save(tableName, saveObj) {
  //   return connection.table(tableName).insert(saveObj);
  // }
  // static update(tableName, updateObj, whereObj) {
  //   return connection.table(tableName).where(whereObj).update(updateObj);
  // }
  // static delete(tableName, deleteObj) {
  //   return connection.table(tableName).where(deleteObj).delete();
  // }
}

module.exports = ExampleQueries;
