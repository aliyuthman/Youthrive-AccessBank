function backendStudent() {
  return [
    {
      name: "Chinyere Adebayo",
      phoneNumber: "08105502317",
      enrollmentId: "CEBE-7569",
      course: "Backend Engineering",
      country: "Nigeria",
    },
    {
      name: "Obinna Ugwu",
      phoneNumber: "07038531988",
      enrollmentId: "CEBE-3417",
      course: "Backend Engineering",
      country: "Nigeria",
    },
    {
      name: "Chiamaka Okafor",
      phoneNumber: "08163429058",
      enrollmentId: "CEBE-9245",
      course: "Backend Engineering",
      country: "Nigeria",
    },
    {
      name: "Ayomide Afolayan",
      phoneNumber: "08068971300",
      enrollmentId: "CEBE-4771",
      course: "Backend Engineering",
      country: "Nigeria",
    },
    {
      name: "Uche Okonkwo",
      phoneNumber: "09032018563",
      enrollmentId: "CEBE-5893",
      course: "Backend Engineering",
      country: "Nigeria",
    },
  ];
}

const backendStudentNames = () => {
  return [
    "Chinyere Adebayo",
    "Obinna Ugwu",
    "Chiamaka Okafor",
    "Ayomide Afolayan",
    "Uche Okonkwo",
  ];
};

module.exports = {
  backendStudent,
  backendStudentNames,
};
