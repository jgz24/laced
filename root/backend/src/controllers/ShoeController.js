const Shoe = require("../models/ShoeModel");

// Get all shoes from database
const getAllShoes = (req, res) => {
  Shoe.find({}, (err, shoes) => {
    if (err) res.send(err);
    res.json(shoes);
  });
};

// Post new shoe to database
const addShoe = (req, res) => {
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

  newShoe.save(err => {
    if (err) res.send(err);
    res.send(`Added shoe to database: ${newShoe}`);
  });
};

module.exports = { getAllShoes, addShoe };
