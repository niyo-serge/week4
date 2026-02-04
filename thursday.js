//1. Loop that prints numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//2. Loop that prints even numbers
for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}

//3. Loop that prints odd numbers
for (let i = 1; i <= 10; i += 2) {
  console.log(i);
}

//4. Loop that sums numbers from 1 to 5
let sum = 0;

for (let i = 1; i <= 5; i++) {
  sum += i;
}

console.log(sum);

//5. Loop that prints a name 5 times
for (let i = 1; i <= 5; i++) {
  console.log("Aime");
}

//6. Loop that multiplies numbers (1 × 5)
let result = 1;

for (let i = 1; i <= 5; i++) {
  result *= i;
}

console.log(result);

//7. Loop that prints array values
let fruits = ["Apple", "Banana", "Mango"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//8. Loop that counts backwards
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

//9. Loop that counts total numbers in an array
let numbers = [2, 4, 6, 8];

console.log(numbers.length);

//10. Loop that finds the largest number
let nums = [10, 5, 20, 8];
let largest = nums[0];

for (let i = 1; i < nums.length; i++) {
  if (nums[i] > largest) {
    largest = nums[i];
  }
}

console.log(largest);

//11. Predict output
for (let i = 0; i < 3; i++) {
  console.log(i + 1);
}
//12. Loop that calculates total price
let prices = [10, 20, 30];
let total = 0;

for (let i = 0; i < prices.length; i++) {
  total += prices[i];
}

console.log(total);

//13. Loop that prints table of 2
for (let i = 1; i <= 10; i++) {
  console.log(2 * i);
}

//14. Loop that checks numbers > 5
let nums = [3, 7, 2, 9];

for (let i = 0; i < nums.length; i++) {
  if (nums[i] > 5) {
    console.log(nums[i]);
  }
}

//15. Loop that adds discounts
let prices = [100, 200, 300];
let discountPrices = [];

for (let i = 0; i < prices.length; i++) {
  discountPrices.push(prices[i] - 20);
}

console.log(discountPrices);

//16. Loop that counts scores above 50
let scores = [30, 60, 80, 45];
let count = 0;

for (let i = 0; i < scores.length; i++) {
  if (scores[i] > 50) {
    count++;
  }
}

console.log(count);

//17. Loop that checks pass/fail
let scores = [40, 70, 55];

for (let i = 0; i < scores.length; i++) {
  if (scores[i] >= 50) {
    console.log("Pass");
  } else {
    console.log("Fail");
  }
}

//18. Loop that prints first 5 multiples of 3
for (let i = 1; i <= 5; i++) {
  console.log(3 * i);
}

//19. Loop that calculates average
let marks = [60, 70, 80];
let sum = 0;

for (let i = 0; i < marks.length; i++) {
  sum += marks[i];
}

let average = sum / marks.length;
console.log(average);

//20. Explain loops using a real example

A loop repeats an action until a condition is met.

Real example:
Imagine you are a teacher calling attendance for 10 students.
Instead of calling each name manually, you use a loop to repeat the action.

for (let student = 1; student <= 10; student++) {
  console.log("Calling student " + student);
}