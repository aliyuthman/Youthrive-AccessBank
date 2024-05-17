const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");

const {
  handleGetRequest,
  handlePostRequest,
  handleSingleEmployeeRequest,
  handleUpdateRequest,
  handleDeleteRequest,
} = require("./routes");

dotenv.config();
const app = express();

const port = process.env.PORT || "5000";

// Middleware
app.use(bodyParser.json());
app.use(express.json());

const connect = () => {
  return mongoose.connect(process.env.DATABASEURL);
};

app.listen(port, () => {
  console.log(`Backend Server is up and running on: http://localhost:${port}`);
});

connect()
  .then(async (connection) => {
    console.log("MongoDB Server Connected!");
  })
  .catch((e) => console.error(e));

app.get("/employees", handleGetRequest);
app.get("/employees/:id", handleSingleEmployeeRequest);

app.post("/add-employee", handlePostRequest);
app.put("/edit-employee/:id", handleUpdateRequest);
app.delete("/remove-employee/:id", handleDeleteRequest);
