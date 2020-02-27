const Shoe = require("../models/ShoeModel");

const getShoes = async (req, res) => {
  let searchTerm = req.params.searchTerm;

  // Need this for user inputs that are more
  // than one word.
  searchTerm = searchTerm.split(" ");

  // Make each word have an uppercase first letter
  // and the remaining letters be lowercase.
  searchTerm = searchTerm.map(
    string => string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
  );

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
