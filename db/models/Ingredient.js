const SequelizeSlugify = require("sequelize-slugify");

module.exports = (sequelize, DataTypes) => {
  const Ingredient = sequelize.define("Ingredient", {
    name: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    slug: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.INTEGER,
      defaultValue: 2,
      validateValue: {
        min: 1,
        max: 100,
      },
    },
  });
  SequelizeSlugify.slugifyModel(Ingredient, {
    source: ["name"],
  });
  //Relations
  Ingredient.associate = (models) => {
    models.Category.hasMany(Ingredient, {
      foreignKey: "categoryId",
      as: "ingredients",
      allowNull: false,
    });
    Ingredient.belongsTo(models.Category, { foreignKey: "categoryId" });
  };

  // Ingredient.associate = (models) => {
  //   models.Recipe.hasMany(Ingredient, {
  //     foreignKey: "recipeId",
  //     as: "ingredients",
  //     allowNull: false,
  //   });
  //   Ingredient.belongsTo(models.Recipe, { foreignKey: "recipeId" });
  // };

  return Ingredient;
};
