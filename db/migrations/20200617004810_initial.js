const Knex = require('knex');

const tablenames = require('../../src/constants/tableNames');

function addDefaultColumn(table) {
  table.timestamps(false, true);
  table.integer('created_by');
  table.integer('updated_by');
  table.integer('deleted_by');
  table.datetime('deleted_at');
}

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  await knex.schema.createTable(tablenames.user, (table) => {
    table.increments().notNullable();
    table.string('email', 254).notNullable().unique();
    table.string('name', 254).notNullable().unique();
    table.string('password', 254).notNullable().unique();
    addDefaultColumn(table);
  });
};

exports.down = async (knex) => {
  await Promise.all(
    [tablenames.user].map((tablename) => knex.schema.dropTable(tablename))
  );
};
