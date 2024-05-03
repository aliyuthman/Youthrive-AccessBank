const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

const port = process.env.PORT || "5000";

const homeRouter = require("./routes/homeController");
const stringRouter = require("./routes/stringController");
const objectRouter = require("./routes/objectController");
const arrayRouter = require("./routes/arrayController");

app.use(express.json());
app.use("/", homeRouter);
app.use("/string", stringRouter);
app.use("/object", objectRouter);
app.use("/array", arrayRouter);

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
