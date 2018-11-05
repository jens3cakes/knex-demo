
exports.up = function(knex, Promise) {
  return knex.schema.table('customers', (table)=>{
   table.string('email', 255).notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('customers', table =>{
    table.dropColumn('email');
  })
};
