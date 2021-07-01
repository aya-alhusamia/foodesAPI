module.exports = (sequelize, DataTypes) => {
  const RecipeIngredient = sequelize.define("RecipeIngredient", {});

  RecipeIngredient.associate = (models) => {
    models.Ingredient.belongsToMany(models.Recipe, {
      through: RecipeIngredient,
      as: "recipes",
      foreignKey: "ingredientId",
    });

    models.Recipe.belongsToMany(models.Ingredient, {
      through: RecipeIngredient,
      as: "ingredients",
      foreignKey: "recipeId",
    });
  };
  return RecipeIngredient;
};
