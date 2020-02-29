const { getAllShoes, getShoes } = require("../controllers/SearchController");

const express = require("express");
const router = express.Router();

router.get("/", getAllShoes);

router.get("/:searchTerm", getShoes);

module.exports = router;
