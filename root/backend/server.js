const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

// Routes
const shoeRoute = require("./src/routes/ShoeRoute");

const app = express();

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// Parse application/json
app.use(bodyParser.json());
// Disables cors errors
app.use(cors());

// Use routes
app.use("/", shoeRoute);
app.use("/post", shoeRoute);

// Connect to mongoDB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to DB.")
);

//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

port = process.env.port || 8080;

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
