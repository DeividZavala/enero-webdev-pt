const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reservationSchema = new Schema(
  {
    guest: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User"
    },
    startDate: {
      type: Date,
      required: true
    },
    endDate: {
      type: Date,
      required: true
    },
    total: {
      type: Number,
      required: true
    },
    property: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Property"
    }
  },
  { timestamps: true }
);
