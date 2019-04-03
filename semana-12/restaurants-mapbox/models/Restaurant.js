const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const restSchema = new Schema(
  {
    name: String,
    description: String,
    location: {
      type: {
        type: String,
        default: "Point"
      },
      coords: [Number]
    }
  },
  { timestamps: true }
);

restSchema.index({ location: "2dsphere" });

module.exports = mongoose.model("Restaurant", restSchema);
