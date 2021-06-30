"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      "RecipeIngredients",
      "ingredientId",
      Sequelize.INTEGER,
      {
        references: {
          model: {
            tableName: "Ingredients",
            schema: "schema",
          },
          key: "id",
        },
        allowNull: false,
      }
    );

    await queryInterface.addColumn(
      "RecipeIngredients",
      "recipeId",
      Sequelize.INTEGER,
      {
        references: {
          model: {
            tableName: "Recipes",
            schema: "schema",
          },
          key: "id",
        },
        allowNull: false,
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("RecipeIngredients", "ingredientId");
    await queryInterface.removeColumn("RecipeIngredients", "recipeId");
  },
};
