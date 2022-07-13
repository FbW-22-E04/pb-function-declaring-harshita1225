//declaring a function

console.log("Multiplication");
function multiply(a, b) {
  return a * b;
}

let result1 = multiply(5, 6);
console.log(result1);

//console.log(`when ${a} is multiplied with ${b} result is :`, result);

//Arrow function

const multiplication = (x, y) => x * y;
let result2 = multiplication(5, 6);
console.log(result2);

// Function Declaration as values

const multiplyTwoNum = function (p, q) {
  return p * q;
};

console.log(multiplyTwoNum(5, 6));
console.log("-----------------------");

console.log("Division");

//function as expression
const Division = function (a, b) {
  return a / b;
};

console.log(Division(36, 6));

//Arrow Function

const divide = (a, b) => a / b;

console.log(divide(886, 6).toFixed(3));

//declaring a division function

function division(a, b) {
  console.log(a, b);
  console.log(a / b);
}

division(877, 78);
