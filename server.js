const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
require("dotenv/config");

// Routes
const shoeRoute = require("./src/routes/ShoeRoute");
const searchRoute = require("./src/routes/SearchRoute");
const checkOutRoute = require("./src/routes/CheckOutRoute");

const app = express();

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// Parse application/json
app.use(bodyParser.json());
// Disables cors errors
// app.use(cors());

// Serve all static files from build directory
app.use(express.static(path.join(__dirname, "build")));

// Serve any unknown routes to index.html
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Use routes
app.use("/post", shoeRoute);
app.use("/search", searchRoute);
app.use("/checkout", checkOutRoute);

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

port = process.env.port || 5000;

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
