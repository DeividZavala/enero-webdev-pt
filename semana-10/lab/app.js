const express = require("express");
const PunkAPIWrapper = require("punkapi-javascript-wrapper");
const punkAPI = new PunkAPIWrapper();
const app = express();

app.get("/", (req, res) => {
  punkAPI
    .getBeers()
    .then(beers => {
      res.render("chelas", { beers });
    })
    .catch(error => {
      console.log(error);
    });
});

app.listen("3000", () => console.log("corriendo en el 3000"));
