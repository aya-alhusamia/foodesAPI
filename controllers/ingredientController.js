const { Ingredient } = require("../db/models");

exports.fetchIngredient = async (ingredientId, next) => {
  try {
    const ingredient = await Ingredient.findByPk(ingredientId);
    return ingredient;
  } catch (error) {
    next(error);
  }
};

exports.deletIngredient = async (req, res, next) => {
  try {
    await req.ingredient.destroy();
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.ingredientList = async (req, res, next) => {
  try {
    const ingredients = await Ingredient.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    res.json(ingredients);
  } catch (error) {
    next(error);
  }
};
