const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const propertySchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User"
    },
    title: {
      type: String,
      required: true
    },
    pricePerNight: {
      type: Number,
      required: true
    },
    location: {
      type: {
        type: String,
        default: "Point"
      },
      address: {
        type: String
      },
      coordinates: {
        type: [Number]
      }
    },
    description: {
      type: String
    },
    images: {
      type: [String],
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Property", propertySchema);
