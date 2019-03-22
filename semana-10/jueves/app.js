const mongoose = require("mongoose");
const Perro = require("./models/Perro");

mongoose
  .connect("mongodb://localhost/enero-pt", { useNewUrlParser: true })
  .then(() => {
    console.log("conectado a la db");
  });

//const Perro = mongoose.model("Perro", { name: String, age: Number });

function randomAge() {
  return Math.floor(Math.random() * 20) + 1;
}

//const panzer = new Perro({ name: "Panzer", age: randomAge(), raza: "pug" });

// CREATE
Perro.create({ name: `Panzer ${randomAge()}`, age: randomAge(), raza: "pug" })
  .then(perro => {
    console.log(perro);
  })
  .catch(err => {
    console.log(err);
  });

// READ
Perro.find({ age: { $gt: 8 } }, { name: 0, _id: 0 }).then(perros => {
  console.log(perros);
});

// UPDATE
Perro.updateMany(
  { age: { $gt: 8 } },
  { $set: { owner: "5c8d38f4743f5b64acfb6145" } }
).then(perros => {
  console.log(perros);
});

// DELETE
Perro.deleteMany({ age: { $lte: 8 } }).then(perros => {
  console.log(perros);
});
