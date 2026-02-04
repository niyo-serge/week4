//1. Check if a number is positive or negative
let num = -5;

if (num >= 0) {
  console.log("Positive");
} else {
  console.log("Negative");
}

//2. Simple calculator (addition)
let a = 5;
let b = 3;

console.log(a + b);

//3. Check if a number is even or odd
let num = 7;

if (num % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

//4. Check if age ≥ 18
let age = 20;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

//5. Print "Login successful" if isLoggedIn is true
let isLoggedIn = true;

if (isLoggedIn) {
  console.log("Login successful");
}
//6. Calculator (subtraction)
let a = 10;
let b = 4;

console.log(a - b);

//7. Predict output
console.log(10 > 5 && 5 > 3);

//8. Compare two prices and print the bigger one
let price1 = 50;
let price2 = 70;

if (price1 > price2) {
  console.log(price1);
} else {
  console.log(price2);
}

//9. Calculator (multiplication)
let a = 6;
let b = 4;

console.log(a * b);

//10. Check if a number is exactly 10
let num = 10;

if (num === 10) {
  console.log("Number is 10");
}

//11. Condition using || (OR)
let age = 16;

if (age < 18 || age > 60) {
  console.log("Not in working age");
}

//12. Print "Low" if score < 40
let score = 35;

if (score < 40) {
  console.log("Low");
}

//13. Calculator (division)
let a = 20;
let b = 4;

console.log(a / b);

//14. Predict output
let x = 5;
if (x % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}
//15. Check if username is empty
let username = "";

if (username === "") {
  console.log("Username is empty");
}

//16. Check password length > 6
let password = "mypassword";

if (password.length > 6) {
  console.log("Password is strong");
}

//17. Print grade based on score
let score = 75;

if (score >= 80) {
  console.log("A");
} else if (score >= 60) {
  console.log("B");
} else if (score >= 40) {
  console.log("C");
} else {
  console.log("Fail");
}

//18. Calculator (remainder)
let a = 10;
let b = 3;

console.log(a % b);

//19. Check if two numbers are NOT equal
let a = 5;
let b = 8;

if (a !== b) {
  console.log("Numbers are not equal");
}

//20. Explain what if-else does (with example)

 if-else checks a condition and runs different code based on true or false.

Example:

let age = 15;

if (age >= 18) {
  console.log("You can vote");
} else {
  console.log("You cannot vote");