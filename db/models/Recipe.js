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

  return Recipe;
};
