
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('user_progress', (table) => {
    table.increments('id')
    table.integer('user_id')
    table.integer('post_type_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('user_progress')
};
