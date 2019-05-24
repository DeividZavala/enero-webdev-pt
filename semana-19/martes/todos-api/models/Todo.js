const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema(
  {
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    body: {
      required: true,
      type: String,
    },
    expiration_date: {
      type: Date,
      default: Date.now() + 86400000,
    },
    images: {
      type: [String],
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "low",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Todo", todoSchema);
