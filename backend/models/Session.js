const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema(
  {
    deviceId: {
      type: String,
      required: true,
      unique: true,
    },

    currentOrder: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Session", sessionSchema);