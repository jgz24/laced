const mongoose = require("mongoose");

const ShoeSchema = new mongoose.Schema({
  Name: String,
  Img: String,
  Gender: [],
  Activity: [],
  Color: [],
  Brand: String,
  Sport: String,
  Size: [],
  Price: Number,
  Quantity: Number
});

const Shoe = mongoose.model("Shoes", ShoeSchema);

module.exports = Shoe;
