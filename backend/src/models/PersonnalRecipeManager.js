const AbstractManager = require("./AbstractManager");

class PersonnalRecipeManager extends AbstractManager {
  constructor() {
    super({ table: "personnal_recipe" });
  }

  insert(recipe) {
    return this.connection.query(
      `insert into ${this.table} (name, description, ingredients, image, mealType, cook_time, cuisineType, labels, user_id) values (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        recipe.name,
        recipe.description,
        JSON.stringify(recipe.ingredients),
        recipe.image,
        recipe.mealType,
        recipe.cook_time,
        recipe.cuisineType,
        recipe.labels,
        recipe.user_id,
      ]
    );
  }

  update(recipe) {
    return this.connection.query(
      `update ${this.table} set name = ?, description = ?, ingredients = ?, image = ?, mealType = ?, cook_time = ?, cuisineType = ?, labels = ? where id = ?`,
      [
        recipe.name,
        recipe.description,
        recipe.ingredients,
        recipe.image,
        recipe.mealType,
        recipe.cook_time,
        recipe.cuisineType,
        recipe.labels,
        recipe.user_id,
      ]
    );
  }
}

module.exports = PersonnalRecipeManager;
