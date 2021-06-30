const express = require("express");
const cors = require("cors");
const categoryRouter = require("./routes/categories");
const ingredientRouter = require("./routes/ingredients");
const recipeRouter = require("./routes/recipes");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/categories", categoryRouter);
app.use("/ingredients", ingredientRouter);
app.use("/recipes", recipeRouter);
app.use("/media", express.static("media"));
app.use((req, res, next) => {
  res.status(404).json({ message: "Path not found" });
  next();
});

app.use((err, req, res, next) => {
  res
    .status(err.status ?? 500)
    .json({ message: err.message ?? "Intrenal Server Error" });
});
const PORT = 8000;

app.listen(PORT, () => console.log(`${PORT}`));
