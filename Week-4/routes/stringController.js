const express = require("express");
const router = express.Router();

router.route("/").get(async (req, res) => {
  res.send("Hello! String, from NodeJs Backend.");
});

module.exports = router;
