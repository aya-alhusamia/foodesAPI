const { Ingredient, Recipe } = require("../db/models");

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
      include: {
        association: Recipe,
        as: "recipe",
        attributes: ["id"],
      },
    });
    res.json(ingredients);
  } catch (error) {
    next(error);
  }
};

exports.createRecipe = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = `http://${req.get("host")}/media/${req.file.filename}`;
    }
    req.body.ingredientId = req.params.ingredientId;
    const newRecipe = await Recipe.create(req.body);
    res.status(201).json(newRecipe);
  } catch (error) {
    next(error);
  }
};
