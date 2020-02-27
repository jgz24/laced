const mongoose = require("mongoose");

const ShoeSchema = new mongoose.Schema({
  Name: String,
  Img: String,
  Gender: [String],
  Activity: [String],
  Color: [String],
  Brand: String,
  Sport: String,
  Size: [String],
  Price: String,
  Quantity: Number
});

const Shoe = mongoose.model("Shoes", ShoeSchema);

module.exports = Shoe;
