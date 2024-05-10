const express = require("express");
const router = express.Router();

router.route("/").get(async (req, res) => {
  res.send("Hello! Welcome to Nigeria Food Website");
});

module.exports = router;
