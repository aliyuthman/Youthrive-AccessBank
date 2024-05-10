const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

dotenv.config();
const app = express();

const port = process.env.PORT || "5000";

const home = require("./routes/home");
const product = require("./routes/product");

// Middleware
app.use(bodyParser.json());
app.use(express.json());

app.use("/", home);

app.use("/food", product);

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
