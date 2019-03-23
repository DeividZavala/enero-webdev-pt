const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");

app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("form");
});

app.get("/detail/:david/:id/:name", (req, res) => {
  res.json(req.params);
});

// /query?perro=234&morro=david&age=21&min=200&max=700
app.get("/query", (req, res) => {
  //{cost: {$gte: req.query.min, $lte: req.query.max}}

  res.json(req.query);
});

// POST

app.post("/", (req, res) => {
  const { title } = req.body;
  console.log(title);
  //res.json(req.body);
  res.redirect("/");
});

app.listen("3000", () => {
  console.log("Corriendo en el 3000 papud");
});
