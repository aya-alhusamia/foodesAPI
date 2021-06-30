const express = require("express");
const ingredientControler = require("../controllers/ingredientController");
const router = express.Router();
const multer = require("multer");
router.param("ingredientId", async (req, res, next, ingredientId) => {
  const findIngredients = await ingredientControler.fetchIngredient(
    ingredientId,
    next
  );
  if (findIngredients) {
    req.ingredient = findIngredients;
    next();
  } else {
    next({ message: "Ingredient not found ", status: 404 });
  }
});

const storage = multer.diskStorage({
  destination: "./media",
  filename: (req, file, cb) => {
    cb(null, `${+new Date()}${file.originalname}`);
  },
});

const upload = multer({
  storage,
});

router.delete("/:ingredientId", ingredientControler.deletIngredient);

router.get("/", ingredientControler.ingredientList);

module.exports = router;
