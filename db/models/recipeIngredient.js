const Ingredient = require("./Ingredient");
const Recipe = require("./Recipe");

module.exports = (sequelize, DataTypes) => {
  const RecipeIngredient = sequelize.define("RecipeIngredient", {
    recipeId: {
      type: DataTypes.INTEGER,
      references: {
        model: Recipe,
        key: "id",
      },
    },
    ingredientId: {
      type: DataTypes.INTEGER,
      references: {
        model: Ingredient,
        key: "id",
      },
    },
  });

  RecipeIngredient.associate = (models) => {
    models.Ingredient.belongsToMany(models.Recipe, {
      through: "recipeIngredient",
      as: "recipes",
      foreignKey: "ingredientId",
    });

    models.Recipe.belongsToMany(models.Ingredient, {
      through: "recipeIngredient",
      as: "ingredients",
      foreignKey: "recipeId",
    });
  };
  return RecipeIngredient;
};
