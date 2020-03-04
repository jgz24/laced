const { makePayment } = require("../controllers/PaymentController");

const express = require("express");
const router = express.Router();

router.post("/", makePayment);

module.exports = router;
