const { Recipe, RecipeIngredient } = require("../db/models");

exports.fetchRecipe = async (recipeId, next) => {
  try {
    const recipe = await Recipe.findByPk(recipeId);
    return recipe;
  } catch (error) {
    next(error);
  }
};

exports.recipeList = async (req, res, next) => {
  try {
    const recipes = await Recipe.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    res.json(recipes);
  } catch (error) {
    next(error);
  }
};
exports.createRecipe = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = `http://${req.get("host")}/media/${req.file.filename}`;
    }

    const newRecipe = await Recipe.create(req.body);
    const idsArry = req.body.ingredients.map(
      (e) => (e = { ingredientId: e, recipeId: newRecipe.id })
    ); // from arrayofids to arrayofobj
    RecipeIngredient.bulkCreate(idsArry);
    //   {
    //   ingredientId: req.body.ingredients[0],
    //   recipeId: newRecipe.id,
    // }
    //);
    res.status(201).json(newRecipe);
  } catch (error) {
    next(error);
  }
};
