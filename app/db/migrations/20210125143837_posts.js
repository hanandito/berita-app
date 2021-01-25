
exports.up = function(knex) {
    return knex.schema
    .createTable('posts', function (table) {
       table.increments('id');
       table.string('title', 255);
       table.string('body');
       table.string('slug', 255);
       tabla.timestamp('created at').defaultTo(knex.fn.now())
    })
  
};

exports.down = function(knex) {
  return knex.schema
  .dropTable("posts")
};
