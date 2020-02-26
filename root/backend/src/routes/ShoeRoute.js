const { getAllShoes, addShoe } = require("../controllers/ShoeController");

const express = require("express");
const router = express.Router();

router.get("/", getAllShoes);

router.post("/post", addShoe);

module.exports = router;
