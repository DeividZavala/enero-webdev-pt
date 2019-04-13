const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reviewSchema = new Schema(
  {
    rate: {
      type: Number,
      required: true
    },
    author: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User"
    },
    comment: {
      type: String
    },
    property: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Property"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Review", reviewSchema);
