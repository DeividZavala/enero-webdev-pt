const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const characterSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: "Debes mandar un nombre"
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

characterSchema.index({ name: 1 });

module.exports = mongoose.model("Character", characterSchema);
