//1. Simple calculator using functions
function calculator(a, b, operator) {
  if (operator === "+") {
    return a + b;
  } else if (operator === "-") {
    return a - b;
  } else if (operator === "*") {
    return a * b;
  } else if (operator === "/") {
    return a / b;
  } else {
    return "Invalid operator";
  }
}
console.log(calculator(10, 5, "+")); // 15
console.log(calculator(10, 5, "-")); // 5

//2. Check login and age
let isLoggedIn = true;
let age = 20;

if (isLoggedIn && age >= 18) {
  console.log("Access granted");
} else {
  console.log("Access denied");
}

//3. Calculate total and discount
function totalWithDiscount(prices, discount) {
  let total = 0;
  for (let i = 0; i < prices.length; i++) {
    total += prices[i];
  }
  return total - discount;
}

console.log(totalWithDiscount([50, 100, 25], 20)); // 155

//4. Function with a loop inside
function printNumbers(n) {
  for (let i = 1; i <= n; i++) {
    console.log("Number:", i);
  }
}

printNumbers(5);

//5. Print grades for scores
function printGrade(score) {
  if (score >= 80) console.log("A");
  else if (score >= 60) console.log("B");
  else if (score >= 40) console.log("C");
  else console.log("Fail");
}

printGrade(75); // B

//6. Count pass/fail students
let scores = [30, 60, 45, 80];
let pass = 0;
let fail = 0;

for (let i = 0; i < scores.length; i++) {
  if (scores[i] >= 50) pass++;
  else fail++;
}

console.log("Pass:", pass);
console.log("Fail:", fail);

//7. Find biggest number in array
let numbers = [10, 45, 22, 78];
let biggest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > biggest) biggest = numbers[i];
}

console.log("Biggest number:", biggest);

//8. Sum all numbers in array
let nums = [5, 10, 15];
let sum = 0;

for (let i = 0; i < nums.length; i++) {
  sum += nums[i];
}

console.log("Sum:", sum);

//9. Check empty input
let input = "";

if (input === "") {
  console.log("Input is empty");
} else {
  console.log("Input entered:", input);
}

//10. Validate score range
let score = 85;

if (score >= 0 && score <= 100) {
  console.log("Valid score");
} else {
  console.log("Invalid score");
}

//11. Calculator that supports + and -
function simpleCalc(a, b, op) {
  if (op === "+") return a + b;
  else if (op === "-") return a - b;
  else return "Invalid operation";
}

console.log(simpleCalc(10, 3, "+")); // 13
console.log(simpleCalc(10, 3, "-")); // 7

//12. Function that returns result message
function resultMessage(score) {
  if (score >= 50) return "Pass";
  else return "Fail";
}

console.log(resultMessage(60)); // Pass
console.log(resultMessage(40)); // Fail

//13. Loop that prints receipt items
let items = ["Apple", "Banana", "Milk"];

for (let i = 0; i < items.length; i++) {
  console.log("Item:", items[i]);
}

//14. Check payment status
let paymentDone = false;

if (paymentDone) console.log("Payment successful");
else console.log("Payment pending");

//15. Calculate tax
function calculateTax(price, taxRate) {
  return price + (price * taxRate / 100);
}

console.log(calculateTax(100, 18)); // 118

//16. Check stock availability
let stock = 5;
let order = 3;

if (order <= stock) console.log("Stock available");
else console.log("Stock not available");

//17. Validate password length
let password = "mypassword";

if (password.length >= 6) console.log("Password valid");
else console.log("Password too short");

//18. Repeat action 10 times
for (let i = 1; i <= 10; i++) {
  console.log("Action repeated:", i);
}

// 19. Explain your calculator logic

// User provides two numbers and an operator.

// Use if-else to decide which operation to do (+, -, *, /).

// Return the result so it can be displayed.

// 20. How JS helped me think logically

// JavaScript forces you to break problems into small steps: conditions, loops, functions.

// Example: calculating total price → think “sum all items, subtract discount, apply tax” step by step.

// JS makes your thought process clear and structured.