
exports.up = function(knex, Promise) {
  return knex.schema.alterTable('customers', table =>{
    table.unique('email')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.alterTable('customers', table =>{
    table.dropUnique('email');
  })
};
