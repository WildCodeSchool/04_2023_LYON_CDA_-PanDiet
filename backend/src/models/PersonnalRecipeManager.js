const AbstractManager = require("./AbstractManager");

class PersonnalRecipeManager extends AbstractManager {
  constructor() {
    super({ table: "personnal_recipe" });
  }

  insert(recipe) {
    return this.connection.query(
      `insert into ${this.table} (name, description, ingredients, instructions, image, cook_time, colories, recipe_link, labels, user_id) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        recipe.name,
        recipe.description,
        recipe.ingredients,
        recipe.instructions,
        recipe.image,
        recipe.cook_time,
        recipe.colories,
        recipe.recipe_link,
        recipe.labels,
        recipe.user_id,
      ]
    );
  }

  update(recipe) {
    return this.connection.query(
      `update ${this.table} set name = ?, description = ?, ingredients = ?, instructions = ?, image = ?, cook_time = ?, colories = ?, recipe_link = ?, labels = ? where id = ?`,
      [
        recipe.name,
        recipe.description,
        recipe.ingredients,
        recipe.instructions,
        recipe.image,
        recipe.cook_time,
        recipe.colories,
        recipe.recipe_link,
        recipe.labels,
        recipe.id,
      ]
    );
  }
}

module.exports = PersonnalRecipeManager;
