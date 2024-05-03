const express = require("express");
const router = express.Router();

const { backendStudentNames } = require("../utils/careerExStudents");

const studentNames = backendStudentNames();

router.route("/").get(async (req, res) => {
  res.send(studentNames);
});

module.exports = router;
