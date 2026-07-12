const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    deviceId: {
      type: String,
      required: true,
    },

    items: [
      {
        code: Number,
        name: String,
        price: Number,
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],

    total: {
      type: Number,
      default: 0,
    },

    status: {
      type: String,
      enum: ["current", "placed", "cancelled", "paid"],
      default: "current",
    },

    paymentReference: String,

    scheduledFor: Date,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", orderSchema);