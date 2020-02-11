
exports.seed = function(knex, Promise) {
  return knex('shoppinglist').insert([   
    { shopping_id: 1, food_item: "cookie" },
    { shopping_id: 2, food_item: "cake" }
  ]);
};
/*
  .createTable('shoppinglist', tbl => {
            tbl.increments();
            tbl.integer('shopping_id').notNullable()
            tbl.text('food_item', 128)
            .references('name')
            .inTable('ingredients')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        })
*/