const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  let data = {
    perro: "<span>David</span>",
    bootcamp: "#Los webdev pt 2",
    address: {
      street: "Your heart",
      number: 87
    },
    students: ["Tomas", "Peter", "Felipe", "Rocio", "Dom", "Daniel"]
  };
  res.render("index", data);
});

app.get("/teams", (req, res) => {
  res.render("teams");
});

app.get("/players", (req, res) => {
  res.render("players");
});

app.listen("3000", () => {
  console.log("Corriendo en el 3000");
});
