const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: "Ya existe este username",
      required: "Debes mandar el username"
    },
    password: {
      type: String,
      trim: true,
      required: "Debes mandar contraseña"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
