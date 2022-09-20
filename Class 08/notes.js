// Module Pattern Demo Start \\
// const Counter = (function () {
//   let counter = 0;

//   return {
//     incrementCounter: function () {
//       return ++counter;
//     },

//     resetCounter: function () {
//       return (counter = 0);
//     },
//   };
// })();

// // Usage:
// console.log("Counter.counter:", Counter.counter); // Notice how we don't have direct access to the counter variable

// let currCount;

// currCount = Counter.incrementCounter();
// console.log("currCount after incrementing:", currCount);

// currCount = Counter.resetCounter();
// console.log("currCount after reset:", currCount);
// // Module Pattern Demo End \\


// Builder Pattern Demo Start \\
// class Calculator {
//   constructor(props) {
//     this.result = 0;
//   }

//   add(num) {
//     this.result += num;
//     return this;
//   }

//   subtract(num) {
//     this.result -= num;
//     return this;
//   }

//   multiply(num) {
//     this.result *= num;
//     return this;
//   }

//   divide(num) {
//     this.result /= num;
//     return this;
//   }

//   compute() {
//     return this.result;
//   }
// }

// // Usage:
// let calculator = new Calculator();
// let calculator2 = new Calculator();

// let expression1 = calculator.add(5).subtract(1).multiply(2).divide(2);
// let expression2 = calculator2.add(1).subtract(4).multiply(2).divide(8);

// console.groupCollapsed("Builder Pattern");
// console.log("result 1:", expression1.result);
// console.log("result 2:", expression2.result);
// console.groupEnd();
// Builder Pattern Demo End \\




// Composites Pattern Demo Start \\
// Component Class

// class Employee {
//   constructor(name, position) {
//     this.name = name;
//     this.position = position;
//   }
// }

// // Leaf Subclass
// class SoftwareDeveloper extends Employee {
//   constructor(name, position) {
//     super(name, position);
//   }
// }
// // Leaf Subclass
// class FreelanceDesigner extends Employee {
//   constructor(name, position) {
//     super(name, position);
//   }
// }

// // Composite Subclass
// class DevTeamLead extends Employee {
//   constructor(name, position) {
//     super(name, position);
//     this.teamMembers = [];
//   }

//   addMember(employee) {
//     this.teamMembers.push(employee);
//   }

//   viewTeam() {
//     let employeeNames = this.teamMembers.map((member) => member.name);
//     return employeeNames;
//   }
//   // . . .
// }

// // Usage:
// const seniorDev = new SoftwareDeveloper("Rachel", "Senior Developer");
// const companyDesigner = new FreelanceDesigner("Joey", "Web Designer");
// const teamLead = new DevTeamLead("Regina", "Dev Team Lead");

// teamLead.addMember(seniorDev);
// teamLead.addMember(companyDesigner);

// console.groupCollapsed("Composites Pattern");
// console.log("Team members list:", teamLead.viewTeam());
// console.groupEnd();
// // Composites Pattern Demo End \\


// Inheritance example with isomorphism
// class Animal {
//   makeSound() {
//     console.log("Animal Sound")
//   }
// }

// class Dog extends Animal {
//   makeSound() {
//     console.log("Bark")
//   }
// }


// const animal = new Animal();
// const dog = new Dog();

// animal.makeSound()
// dog.makeSound()




// const btn = document.getElementById("btn")
// btn.addEventListener("click", (event) => {
//   console.log(event)
// })



// class KeyUpObserver {
//   constructor() {
//     this.observers = []
//   }

//   subscribe(fn) {
//     this.observers.push(fn)
//   }

//   unsubscribe(fn) {
//     this.observers = this.observers.filter((cb) => cb !== fn)
//   }

//   broadcast(data) {
//     this.observers.forEach((cb) => cb(data))
//   }
// }

// const getWordCount = (text) => (text ? text.trim().split(/\s+/).length : 0)
// const wordCountEl = document.createElement("p")
// wordCountEl.innerHTML = 'Word Count: <strong id="blogWordCount">0</strong>'
// document.body.appendChild(wordCountEl);


// ~~~~~ SYNCHRONOUS CODING ~~~~~ \\
// function goToSchool() {
//   console.log("THE BUS! Welp, I missed the bus!");
// }
// function code() {
//   console.log("Coded all day successfully!");
// }

// // Usage:
// // console.groupCollapsed("Synchronous Coding");
// goToSchool();
// code();
// console.groupEnd();





// ~~~~~ CALLBACKS ~~~~~ \\
// function growCorn() {
//   setTimeout(() => {
//     console.log("Corn Success");
//   }, 3000);
// }
// function PickApple() {
//   console.log("Apple Success");
// }

// // Usage:
// growCorn();
// PickApple();



// ~~~~~ PROMISES ~~~~~ \\
// const someAPIRequest = {
//   success: Math.random() < 0.5,
//   data: "Here is your data",
// };
// const getDetails = new Promise((resolve, reject) => {
//   if (someAPIRequest.success) {
//     resolve(someAPIRequest.data);
//   } else {
//     reject(new Error("API Request Failed. Try again."));
//   }
// });

// // Usage:
// getDetails
//   .then((done) => {
//     console.log("done:", done);
//     return "more data"
//   })
//   .then((data) => {
//     // doing extra stuff
//     console.log("do more stuff with ", data);
//   })
//   .catch((err) => {
//     console.log("err:", err);
//   })
//   .finally((data) => {
//     console.log("This is always called last no matter what");
//   })



// ~~~~~ OLD WAY (PROMISES) ~~~~~ \\
// function getAllCommentsUsingPromises() {
//   const data = fetch("https://jsonplaceholder.typicode.com/comments")
//     .then((response) => response.json())
//     .then((json) => console.log("PROMISES:", json))
//     .catch((err) => console.log("err:", err));
// }

// getAllCommentsUsingPromises();


// // ~~~~~ NEW WAY (ASYNC/AWAIT) ~~~~~ \\
// async function getAllCommentsUsingAsyncAwait() {
//   try {
//     const data = await fetch("https://jsonplaceholder.typicode.com/comments");
//     const res = await data.json();
//     console.log("ASYNC/AWAIT:", res);
//   } catch (err) {
//     console.log("err:", err);
//   }
// }

// getAllCommentsUsingAsyncAwait();










// const observer = new KeyUpObserver();
// observer.subscribe((text) => {
//   const blogCount = document.getElementById("blogWordCount")
//   blogCount.textContent = getWordCount(text)
// })

// const blogPost = document.getElementById("blogPost")
// blogPost.addEventListener("keyup", () => observer.broadcast(blogPost.value))




// function fib(n) {
//   if (n <= 2) return 1;
//   return fib(n-1) + fib(n-2)
// }

// // console.log(fib(40))

// function memoizedFib(n, memo) {
//   memo = memo || {}
//   if (memo[n]) return memo[n];

//   if (n <= 2) return 1;
//   const res = memoizedFib(n -1, memo) + memoizedFib (n-2, memo);
//   memo[n] = res

//   return res;
// }

// console.log(memoizedFib(40))
// console.log(memoizedFib(50))



// ~~~~~~~ REST OPERATOR ~~~~~~~ \\
console.groupCollapsed("Rest Operator");

function sumOf(...args) {
  console.log("args:", args);

  let sum = 0;

  args.forEach((arg) => (sum += arg));

  return sum;
}

const testCalculation = sumOf(1, 2, 5, 8);

console.log("testCalculation:", testCalculation);
console.groupEnd();


const arr = [1, 2, 3, 4, 5]
// const [first, second, third, ...rest] = arr;
// console.log({first, second, third, rest})

const obj = {first: 1, second: 2, third: 3, fourth: 4}
const {first, second, ...rest} = obj;

console.log({first, second, rest})


// ~~~~~~~ SPREAD OPERATOR ~~~~~~~ \\
const ninthGraders = ["Jennifer", "Berry", "Ashley", "Bernard"];
const tenthGraders = ["Jason", "Amy", "Samuel", "Cook"];
const completeListOfStudents = [...ninthGraders, ...tenthGraders];

console.groupCollapsed("Spread Operator");
console.log("completeListOfStudents:", completeListOfStudents);
console.groupEnd();

























