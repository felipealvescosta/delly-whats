
exports.up = function(knex) {
  return knex.schema.createTable('products',function (table) {
      table.increments();

      table.string('title').notNullable();
      table.string('description').notNullable();
      table.decimal('value').notNullable();
      table.string('image').nullable();
      table.boolean('avaiable').notNullable();
      table.string('company_id').notNullable();
      
      table.foreign('company_id').references('id').inTable('companys'); 
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('products ');
};
