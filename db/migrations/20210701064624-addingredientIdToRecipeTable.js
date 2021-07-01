"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      "Recipes",
      "ingredientId",
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
    await queryInterface.removeColumn("Recipes", "ingredientId");
  },
};
