"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("RecipeIngredients");
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("RecipeIngredients");
  },
};
