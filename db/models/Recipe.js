const SequelizeSlugify = require("sequelize-slugify");

module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define("Recipe", {
    name: {
      type: DataTypes.STRING,
    },
    slug: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
    details: {
      type: DataTypes.STRING,
    },
  });
  SequelizeSlugify.slugifyModel(Recipe, {
    source: ["name"],
  });

  // Recipe.associate = (models) => {
  //   models.Ingredient.belongsToMany(Recipe, {
  //     through: "recipeIngredient",
  //     as: "recipes",
  //     foreignKey: "ingredientId",
  //   });

  //   Recipe.belongsToMany(models.Ingredient, {
  //     through: "recipeIngredient",
  //     as: "ingredients",
  //     foreignKey: "recipeId",
  //   });
  // };
  return Recipe;
};
