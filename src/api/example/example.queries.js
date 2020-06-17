const connection = require('../../config/db');

class ExampleQueries {
  static find(tableName) {
    return connection(tableName);
  }
}

module.exports = ExampleQueries;
