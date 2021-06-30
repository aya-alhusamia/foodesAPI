const express = require("express");
const cors = require("cors");
const categoryRouter = require("./routes/categories");
const ingredientRouter = require("./routes/ingredients");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/categories", categoryRouter);
app.use("/ingredients", ingredientRouter);
app.use("/meadia", express.static("meadia"));
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
