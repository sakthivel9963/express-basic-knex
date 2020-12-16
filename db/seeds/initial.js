const Knex = require('knex');

const tablenames = require('../../src/constants/tableNames');

/**
 * @param {Knex} knex
 */
exports.seed = async (knex) => {
  await knex(tablenames.user).del();

  const data = { email: 'test@123', name: 'test', password: 'test@123' };

  await knex(tablenames.user).insert(data);
};
