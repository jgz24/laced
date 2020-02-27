const { getShoes } = require("../controllers/SearchController");

const express = require("express");
const router = express.Router();

router.get("/:searchTerm", getShoes);

module.exports = router;
