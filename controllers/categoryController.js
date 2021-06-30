const { Category, Ingredient } = require("../db/models");

exports.fetchCategory = async (categoryId, next) => {
  try {
    const category = await Category.findByPk(categoryId);
    return category;
  } catch (error) {
    next(error);
  }
};

exports.createCategory = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = `http://${req.get("host")}/media/${req.file.filename}`;
    }
    const newCategory = await Category.create(req.body);
    res.status(201).json(newCategory);
  } catch (error) {
    next(error);
  }
};

exports.categoryList = async (req, res, next) => {
  try {
    const categories = await Category.findAll({
      attributes: ["id", "name"],
      include: {
        model: Ingredient,
        as: "ingredients",
        attributes: ["id"],
      },
    });
    res.json(categories);
  } catch (error) {
    next(error);
  }
};

exports.createIngredient = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = `http://${req.get("host")}/media/${req.file.filename}`;
    }
    req.body.categoryId = req.params.categoryId;
    const nweIngredient = await Ingredient.create(req.body);
    res.status(201).json(nweIngredient);
  } catch (error) {
    next(error);
  }
};
