
exports.up = function(knex) {
    return (
        knex.schema
        .createTable('recipes', tbl => {
            tbl.increments();
            tbl.integer('recipe_id').notNullable();
            tbl.text('recipe_name', 128).unique();
            tbl.integer('instructionId')
            .references('instrustion_id')
            .inTable('instructions')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        })
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
        .createTable('shoppinglist', tbl => {
            tbl.increments();
            tbl.integer('shopping_id').notNullable()
            tbl.text('food_item', 128)
            .references('name')
            .inTable('ingredients')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        })
        .createTable('ingredients', tbl => {
            tbl.increments();
            tbl.integer('ingredient_id').notNullable()
            tbl.text('name', 128).notNullable();
            tbl.float('quantity').notNullable();
        })
    )
  
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('ingredients')
    .dropTableIfExists('shoppinglist')
    .dropTableIfExists('instructions')
    .dropTableIfExists('recipes');
};
