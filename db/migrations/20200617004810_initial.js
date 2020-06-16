const Knex = require('knex');

const tablenames = require('../../src/constants/tablenames');

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  await knex.schema.createTable(tablenames.user, (table) => {
    table.increments().notNullable();
    table.string('email', 254).notNullable().unique();
    table.string('name', 254).notNullable().unique();
    table.string('password', 254).notNullable().unique();
    table.dateTime('last_login');
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable(tablenames.user);
};
