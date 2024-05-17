const { response } = require("express");
const Employee = require("./models/employee");

const handleGetRequest = async (request, response) => {
  const employees = await Employee.find().sort("firstName");
  response.send(employees);

  return response.status(200).json({ message: "Successful" });
};

const handleSingleEmployeeRequest = async (request, response) => {
  const employee = await Employee.findById(request.params.id);

  if (!employee)
    return response.status(404).send("Oops! Employee can't be found");

  response.send(employee);
};

const handlePostRequest = (request, response) => {
  const { firstName, lastName, email, phone, department, address } =
    request.body;
  const newEmployee = new Employee({
    firstName,
    lastName,
    email,
    phone,
    department,
    address,
    isActive: true,
  });

  newEmployee.save();

  return response.status(200).json({
    employee: newEmployee,
  });
};

const handleUpdateRequest = async (request, response) => {
  const employee = await Employee.findByIdAndUpdate(
    request.params.id,
    {
      firstName: request.body.firstName,
      lastName: request.body.lastName,
    },
    { new: true }
  );

  if (!employee) {
    response.status(404).send("No employee exist with this id: " + params);
    return;
  }

  response.send(employee);
};

const handleDeleteRequest = async (request, response) => {
  const employee = await Employee.findByIdAndDelete(request.params.id);
  if (!employee) {
    response.status(404).send("No employee exist with this id: " + params);
    return;
  }

  response.send(employee);
};

module.exports = {
  handleGetRequest,
  handleSingleEmployeeRequest,
  handlePostRequest,
  handleUpdateRequest,
  handleDeleteRequest,
};
