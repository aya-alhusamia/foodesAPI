const express = require("express");
const categoryController = require("../controllers/categoryController");
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
router.post(
  "/:categoryId/ingredients",
  upload.single("image"),
  categoryController.createIngredient
);
router.post("/", upload.single("image"), categoryController.createCategory);

router.get("/", categoryController.categoryList);

module.exports = router;
