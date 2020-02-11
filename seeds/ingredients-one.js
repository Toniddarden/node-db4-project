
exports.seed = function(knex, Promise) {
  return knex('ingredients').insert([   
    { ingredient_id: 1, name: "flour", quantity: 2 },
    { ingredient_id: 2, name: "wheat", quantity: 1 }
  ]);
};

/*.createTable('ingredients', tbl => {
            tbl.increments();
            tbl.integer('ingredient_id').notNullable()
            tbl.text('name', 128).notNullable();
            tbl.float('quantity').notNullable();
        }) */
