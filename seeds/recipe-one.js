
exports.seed = function(knex, Promise) {
  return knex('recipes').insert([   
    { recipe_id: 1, recipe_name: "cookie", instructionId: 2 },
    { recipe_id: 2, recipe_name: "cake", instructionId: 4 },
    { recipe_id: 3, recipe_name: "pie", instructionId: 6 }
  ]);
};

/*
tbl.increments();
tbl.integer('recipe_id').notNullable();
tbl.text('recipe_name', 128).unique();
tbl.integer('instructionId')
.references('instrustion_id')
.inTable('instructions')
.onUpdate('CASCADE')
.onDelete('CASCADE');
*/