// Add two to every value of the array except to odd numbers.
// function addTwoExceptToOddNumbers(numbers) {
//   // use a for loop
//   // for (let i = 0; i < numbers.length; ++i) {
//   //   if (numbers[i] % 2 === 0) {
//   //     // even
//   //     numbers[i] = numbers[i] + 2
//   //   }
//   // }
//   // return numbers

//   // array map function
//   return numbers.map((num) => num % 2 === 0 ? num + 2 : num)
// }

// const addTwoExceptToOddNumbers = (numbers) => numbers.map((num) => num % 2 === 0 ? num + 2 : num)


// // [1,4,3,6,5]
// console.log(addTwoExceptToOddNumbers([1, 2, 3, 4, 5]));
// // [101,1,6,12]
// console.log(addTwoExceptToOddNumbers([101, 1, 4, 10]));


// Exercise 2
// Use `setTimeout` to append a red 200px by 200x onto the body of a webpage every half second.
const container = document.createElement('div')
document.body.appendChild(container)

const addRedSquare = () => {
  const el = document.createElement('div')
  el.style.width = '200px'
  el.style.height = '200px'
  el.style.backgroundColor = 'red'
  container.appendChild(el)

  setTimeout(addRedSquare, 500)
}

// addRedSquare()