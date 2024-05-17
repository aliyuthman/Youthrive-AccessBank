const mongoose = require("mongoose");

// Define the employee schema
const employeeSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: [/.+\@.+\..+/, "Please fill a valid email address"],
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },

  department: {
    type: String,
    required: true,
    trim: true,
  },

  address: {
    street: {
      type: String,
      trim: true,
    },
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

// Create the model
const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
