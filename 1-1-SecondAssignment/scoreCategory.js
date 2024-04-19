const scoreCategory = (studentScore) => {
    
  // Storing student categories as object of "category"
  const category = {
    excellent: studentScore >= 90,
    veryGood: studentScore >= 80 && studentScore <= 89,
    pass: studentScore >= 70 && studentScore <= 79,
    fail: studentScore < 70,
  };

  // checking each category

  if (category.excellent) {
    return "Excellent";
  } else if (category.veryGood) {
    return "Very Good";
  } else if (category.pass) {
    return "Pass";
  } else if (category.fail) {
    return "Fail";
  } else {
    return "Wrong input, kindly check again!";
  }
};

//saving the return results of the scoreCategory function in memory
const studentCategory = scoreCategory(50);

// printing to console
console.log(studentCategory);
