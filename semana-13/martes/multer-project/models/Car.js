const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const carSchema = new Schema(
  {
    name: String,
    color: {
      type: String,
      enum: ["red", "blue", "black", "white"]
    },
    year: String,
    new: Boolean,
    image: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("Car", carSchema);
