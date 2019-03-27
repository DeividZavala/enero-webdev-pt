const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
    title: String,
    description: String,
    author: {
      type: Schema.Types.ObjectId,
      ref: "Author"
    },
    rating: Number
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);
