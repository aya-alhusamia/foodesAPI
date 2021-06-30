"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      "Ingredients",
      "categoryId",
      Sequelize.INTEGER,
      {
        references: {
          model: {
            tableName: "Categories",
            schema: "schema",
          },
          key: "id",
        },
        allowNull: false,
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Ingredients", "categoryId");
  },
};
