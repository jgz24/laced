const mongoose = require("mongoose");

const ShoeSchema = new mongoose.Schema({
  Id: Number,
  Name: String,
  Img: String,
  Gender: [String],
  Activity: [String],
  Color: [String],
  Brand: String,
  Sport: String,
  Size: [String],
  Price: String,
  Quantity: Number,
  Keywords: [String]
});

const Shoe = mongoose.model("Shoes", ShoeSchema);

module.exports = Shoe;
