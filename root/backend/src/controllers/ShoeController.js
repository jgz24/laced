const Shoe = require("../models/ShoeModel");

// Get all shoes from database
const getAllShoes = async (req, res) => {
  try {
    const shoes = await Shoe.find({});
    res.json(shoes);
  } catch (err) {
    res.json({ message: err });
  }
};

// Post new shoe to database
const addShoe = async (req, res) => {
  let newShoe = new Shoe({
    Name: req.body.Name,
    Img: req.body.Img,
    Gender: req.body.Gender,
    Activity: req.body.Activity,
    Color: req.body.Color,
    Brand: req.body.Brand,
    Sport: req.body.Sport,
    Size: req.body.Size,
    Price: req.body.Price,
    Quantity: req.body.Quantity
  });

  try {
    const savedShoe = await newShoe.save();
    res.json(savedShoe);
  } catch (err) {
    res.json({ message: err });
  }
};

module.exports = { getAllShoes, addShoe };
