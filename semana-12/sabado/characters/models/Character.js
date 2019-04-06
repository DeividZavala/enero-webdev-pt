const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const characterSchema = new Schema(
  {
    name: {
      type: String,
      required: "Debes mandar un nombre",
      unique: "Ya hay uno con este nombre"
    },
    age: Number,
    birthday: Date,
    gender: {
      type: String,
      enum: ["male", "female"]
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Character", characterSchema);
