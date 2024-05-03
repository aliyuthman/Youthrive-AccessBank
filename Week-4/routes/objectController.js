const express = require("express");
const router = express.Router();

const { backendStudent } = require("../utils/careerExStudents");

const student = backendStudent();

router.route("/").get(async (req, res) => {
  res.json({ "Backend Students": student });
});

module.exports = router;
