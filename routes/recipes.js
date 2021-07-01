const express = require("express");
const recipeController = require("../controllers/recipeController");
const router = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: "./media",
  filename: (req, file, cb) => {
    cb(null, `${+new Date()}${file.originalname}`);
  },
});

const upload = multer({
  storage,
});
// router.post("/", upload.single("image"), recipeController.createRecipe);

router.post("/", upload.single("image"), recipeController.createRecipe);

router.get("/", recipeController.recipeList);

module.exports = router;
