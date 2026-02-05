//1. Function that adds two numbers
function add(a, b) {
  return a + b;
}
let r = add(10, 4);
console.log(r);
//2. Function that subtracts two numbers

function subtract(a, b) {
  return a - b;
}
let resul = subtract(10, 4);
console.log(resul);

//3. Function that multiplies two numbers
function multiply(a, b) {
  return a * b;
}
let res = multiply(10, 4);
console.log(res);
//4. Function that divides two numbers
function divide(a, b) {
  return a / b;
}
let ans = divide(10, 4);
console.log(ans);
//5. Calculator function that returns sum
function calculatorSum(x, y) {
  return x + y;
}
let answ = sum(10, 4);
console.log(answ);
//6. Function that checks if a number is even
function isEven(num) {
  return num % 2 === 0;
}
console.log(isEven(4)); 
console.log(isEven(7));
//7. Function that checks if a number is odd
function isOdd(num) {
  return num % 2 !== 0;
}
console.log(isEven(8)); 
console.log(isEven(9));
//8. Function that returns the bigger number
function biggerNumber(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
console.log(biggerNumber(10, 5)); 
console.log(biggerNumber(3, 8)); 
//9. Function that converts minutes to seconds
function minutesToSeconds(minutes) {
  return minutes * 60;
}
console.log(minutesToSeconds(5)); 
console.log(minutesToSeconds(10));
//10. Function that calculates total price
function totalPrice(price, quantity) {
  return price * quantity;
}

//11. Predict output
function test(x) {
  return x + 2;
}
console.log(test(3));

//12. Function that checks pass/fail
function checkPass(score) {
  if (score >= 50) {
    return "Pass";
  } else {
    return "Fail";
  }
}
console.log(checkPassFail(75));
console.log(checkPassFail(40));

//13. Function that checks login status
function checkLogin(isLoggedIn) {
  if (isLoggedIn) {
    return "Login successful";
  } else {
    return "Login failed";
  }
}

//14. Function that calculates discount
function calculateDiscount(price, discountPercent) {
  if (price <= 0 || discountPercent < 0) {
    return "Invalid input";
  }
  return price - (price * discountPercent) / 100;
}

console.log(calculateDiscount(150, 20));

//15. Function that checks if age is valid
function isValidAge(age) {
  if (age >= 18) {
    return "Valid age";
  } else {
    return "Not valid";
  }
}
console.log(isValidAge(25));  
console.log(isValidAge(-3));
//16. Function that returns square of a number
function square(num) {
  return num * num;
}
console.log(square(4)); 
console.log(square(7));
//17. Function that returns area of rectangle

function rectangleArea(length, width) {
  return length * width;
}
let results =area(2,4)
console.log(result);
//18. Function that returns sum of 3 numbers
function add(a, b,c) {
  return a + b+c;
}

let result = add(5, 3,9);
console.log(result);

//19. Why functions are useful Functions allow you to reuse code, reduce repetition, and organize your program into clear, manageable parts.

//20. Explain return in simple words

 //return sends a result from a function back to where the function was called.

//Example:

function add(a, b) {
  return a + b;
}