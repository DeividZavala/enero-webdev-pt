const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const propertySchema = new Schema(
  {
    cost: Number,
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    name: String,
    description: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("Property", propertySchema);
