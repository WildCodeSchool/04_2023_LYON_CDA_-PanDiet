const AbstractManager = require("./AbstractManager");

class PersonnalRecipeManager extends AbstractManager {
  constructor() {
    super({ table: "personnal_recipe" });
  }

  insert(recipe) {
    return this.connection.query(
      `insert into ${this.table} (name, ingredients, instructions, image, mealType, cook_time, cuisineType, user_id) values (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        recipe.name,
        JSON.stringify(recipe.ingredients),
        JSON.stringify(recipe.instructions),
        recipe.image,
        recipe.mealType,
        recipe.cook_time,
        recipe.cuisineType,
        recipe.user_id,
      ]
    );
  }

  update(recipe) {
    return this.connection.query(
      `update ${this.table} set name = ?, ingredients = ?, instructions = ?, image = ?, mealType = ?, cook_time = ?, cuisineType = ? where id = ?`,
      [
        recipe.name,
        recipe.ingredients,
        recipe.instructions,
        recipe.image,
        recipe.mealType,
        recipe.cook_time,
        recipe.cuisineType,
        recipe.user_id,
      ]
    );
  }
}

module.exports = PersonnalRecipeManager;
