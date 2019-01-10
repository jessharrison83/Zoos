exports.up = function(knex, Promise) {
  return knex.schema.createTable("species", table => {
    table.increments();
    table.string("species_name").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("species");
};
