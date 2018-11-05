//where ALTER commands are made, exports.down puts the table back to what it was before changes
//exports.up makes the changes when the migration is called


exports.up = function(knex, Promise) {
  return knex.schema.createTable('items', (table)=>{
    table.increments('id');
    table.string('name', 100).notNullable();
    table.text('description').notNullable();
    table.decimal('price');
    table.integer('inventory').notNullable().defaultTo(0);
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('items');

};
