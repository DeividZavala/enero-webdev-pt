const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const perroSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: "Epale ya hay uno con ese name"
  },
  age: {
    type: Number,
    required: true
  },
  raza: {
    type: String,
    default: "Pitbull"
  },
  owner: {
    type: Schema.Types.ObjectId
  }
});

module.exports = mongoose.model("Perro", perroSchema);
