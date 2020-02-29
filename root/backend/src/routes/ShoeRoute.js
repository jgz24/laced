const { addShoe } = require("../controllers/ShoeController");

const express = require("express");
const router = express.Router();

router.post("/post", addShoe);

module.exports = router;
