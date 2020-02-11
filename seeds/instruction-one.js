
exports.seed = function(knex, Promise) {
  return knex('instructions').insert([   
    { instrustion_id: 1, shoppingId: 2, preparation: "simmer 20 minutes" },
    { instrustion_id: 2, shoppingId: 4, preparation: "simmer 40 minutes" },
    { instrustion_id: 3, shoppingId: 6, preparation: "simmer 60 minutes" }
  ]);
};
/*
 .createTable('instructions', tbl => {
            tbl.increments();
            tbl.integer('instrustion_id').notNullable();
            tbl.integer('shoppingId')
            .references('shopping_id')
            .inTable('shoppinglist')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
            tbl.text('preparation', 128)
        })
*/
