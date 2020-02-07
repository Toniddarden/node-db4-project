
exports.up = function(knex) {
    return (
        knex.schema
        .createTable('recipes', tbl => {
            tbl.increment();
            tbl.text('recipe_name', 128).notNullable().unique();
            tbl.text('recipe_instruction', 128).unsigned()
            .notNullable()
            .references('instrustion_id')
            .inTable('instructions')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        })
        .createTable('instructions', tbl => {
            tbl.increment();
            tbl.integer('instrustion_id').notNullable();
            tbl.text('shopping_list', 128).unsigned()
            .notNullable()
            .references('shopping_id')
            .inTable('shoppinglist')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
            tbl.text('preparation', 128).notNullable();
        })
        .createTable('shoppinglist', tbl => {
            tbl.increment();
            tbl.text('food_item', 128).unsigned()
            .notNullable()
            .references('name')
            .inTable('ingredients')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        })
        .createTable('ingredients', tbl => {
            tbl.increment();
            tbl.text('name', 128).notNullable();
            tbl.text('quantity').notNullable();
        })
    )
  
};

exports.down = function(knex) {
  
};
