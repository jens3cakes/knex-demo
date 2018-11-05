
exports.up = function(knex, Promise) {
  return knex.schema.createTable('customers', table =>{
    table.increments('id');
    table.string('first_name').notNullable;
    table.string('last_name').notNullable;
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('customers');
};
