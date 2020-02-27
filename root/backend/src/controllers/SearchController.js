const Shoe = require("../models/ShoeModel");

const getShoes = async (req, res) => {
  let searchTerm = req.params.searchTerm;

  // Match search term format to upper case first letter,
  // lower case rest of letters.
  searchTerm =
    searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1).toLowerCase();

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

module.exports = { getShoes };
