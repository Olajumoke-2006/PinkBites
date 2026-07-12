const mongoose = require("mongoose");


const menuSchema = new mongoose.Schema(
  {

    code: {
      type: Number,
      required: true,
      unique: true,
    },


    name: {
      type: String,
      required: true,
    },


    price: {
      type: Number,
      required: true,
    },


    category: {
      type: String,
      required: true,
    },


    description: {
      type: String,
      default: "Delicious meal prepared by PinkBites",
    },


    image: {
      type: String,
      required: true,
    },


  },
  {
    timestamps:true,
  }
);



module.exports = mongoose.model("Menu", menuSchema);