const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    facebookId: String,
    displayName: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
