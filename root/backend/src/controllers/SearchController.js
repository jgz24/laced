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

const getShoes = async (req, res) => {
  let searchTerm = req.params.searchTerm;

  // Need this for user inputs that are more
  // than one word.
  searchTerm = searchTerm.split(" ");

  // Search for only the first word
  // Make the word have an uppercase first letter
  // and its remaining letters be lower case.
  searchTerm =
    searchTerm[0].charAt(0).toUpperCase() +
    searchTerm[0].slice(1).toLowerCase();

  try {
    const getShoe = await Shoe.find({
      $or: [
        { Gender: searchTerm },
        { Activity: searchTerm },
        { Color: searchTerm },
        { Brand: searchTerm },
        { Sport: searchTerm },
        { Size: searchTerm },
        { Price: searchTerm }
      ]
    });
    res.json(getShoe);
  } catch (err) {
    res.json({ message: err });
  }
};

module.exports = { getAllShoes, getShoes };
