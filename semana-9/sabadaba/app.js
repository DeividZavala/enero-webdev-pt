const express = require("express");
const chalk = require("chalk");

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send(`<h1>Qué dope morro ${Math.random()}</h1>`);
});

app.get("/home", (req, res) => {
  console.log(__dirname);
  res.sendFile(`${__dirname}/public/views/cat.html`);
});

app.listen(3000, () => {
  console.log(chalk.green("Ya quedó, checa el 3000 perro"));
});
