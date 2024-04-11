function calculateArea(length, width) {
  return length * width;
}

const area = calculateArea(2, 3);

console.log(area);

function reverseString(stringInput) {
  let stringInputReversed = "";

  for (let i = stringInput.length - 1; i >= 0; i--) {
    stringInputReversed += stringInput[i];
  }

  return stringInputReversed;
}

const stringIsReversed = reverseString("CareerEx");
console.log(stringIsReversed);

function isEven(numberInput) {
  return numberInput % 2 === 0? true : false;
}


const checkEven = isEven(4)

console.log(checkEven)