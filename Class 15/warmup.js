// Given the empty array.

let numbers = [];

// Push numbers 0 - 50 into this array.Use the push method to do this.
// Hint.Using a loop will be a good use case in this scenario.
for (let i = 0; i <= 50; ++i) {
  numbers.push(i)
}

// Use the built in array method filter to filter out even numbers of the array.
numbers = numbers.filter((n) => n % 2 === 1)

// From there, add each and every number from the array.
let sum = 0
for (let i = 0; i < numbers.length; ++i) {
  sum += numbers[i]
}
