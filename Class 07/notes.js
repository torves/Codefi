function outer() {
    const someVar = "some value declared from outer scope";

    function inner() {
        console.log("someVar from inner function scope:", someVar);

        return "inner return value";
    }

    console.log("you will see this")

    return inner();
}

// const outerRes = outer()
// console.log(outerRes)


//////////////////////////////////////////////////



// ~ DEMO 2 START ~ \\

// 1. Create a greeting function that returns another function which takes in a second parameter
function greeting(greeting) {
    return function (name) {
        return `${name}! ${greeting}`;
    };
}



// 2. Create a variable that calls the greeting function passing in a generic greeting
// const basicWelcome = greeting("Welcome.");
// const friendlyWelcome = greeting("So glad to see you again!");

// const myOwnGreeting = greeting("Nice to see you!")
// const myOwnGreeting = function(name) {
//     return `${name}! Nice to see you!`;
// }

// console.log(myOwnGreeting("James"))

// const somevar = "this is a regular var"

// 3. Call the variable passing in the name (used for the second parameter callback function)


// console.log("basicWelcome:", basicWelcome("John"));
// console.log("friendlyWelcome:", friendlyWelcome("John"));
// ~ DEMO 2 END ~ \\



/////////////////////////////////////////




// Print the results


// ~ DEMO 3 START ~ \\

// Create a createBankAccount function that takes in an initial balance and declares it in the main function scope
const createBankAccount = (initialBalance) => {
    // Create a variable with an initial value
    let userBalance = initialBalance;

    // Return an object of methods that use this variable
    // Use that variable and call methods on it to add functionality
    return {
        getBalance: function () {
            return userBalance;
        },
        deposit: function (amount) {
            userBalance += amount;
            return userBalance;
        },
        withdrawl: function (amount) {
            userBalance -= amount;
            return userBalance;
        }
    };
};

//   const myAccount = createBankAccount(100);
//   let myBalance;

//   myBalance = myAccount.getBalance(); // 100
//   console.log("myBalance after creation:", myBalance);

//   myAccount.deposit(99);
//   myBalance = myAccount.getBalance(); // 100
//   console.log("myBalance after $99 deposit:", myBalance);

//   myAccount.withdrawl(12);
//   myBalance = myAccount.getBalance(); // 100
//   console.log("myBalance after $12 withdrawl:", myBalance);
// ~ DEMO 3 END ~ \\











// const someObj = {
//     someKey: "some value thats new"
// }

// const someKey = "someKey"

// console.log(someObj.someKey)
// console.log(someObj[someKey])




// const student = new Object()
// student.learning = "Javascript";
// student.name  = "Missy";

// console.log("Student: ", student);

// ~ Common Array Methods ~ \\
const students = [
    // { name: "Medina", grade: 88 },
    // { name: "Blake", grade: 72 },
    { name: "Roscoe", grade: 58 },
    // { name: "Roscoe", grade: 90 },
    // { name: "Stephanie", grade: 99 },
    // { name: "Edith", grade: 93 },
    { name: "Janey", grade: 34 },
    // { name: "Ivan", grade: 89 }
];

// filter
// const passingStudents = students.filter(student => student.grade > 58);
// console.log("passingStudents:", passingStudents);


// map
// students.map(student => (student.isRegistered = true));
// console.log("students after being registered:", students);

// sort
// const studentsByGrade = students.sort((a, b) => b.grade - a.grade);
// console.log("studentsByGrade:", studentsByGrade);

// find
// const classClown = students.find(student => student.name === "Roscoe");
// console.log("classClown:", classClown);

// forEach
// students.forEach(student => student.grade++);
// console.log("students w/ added grade point:", students);

// some
// const hasAnyFailingStudents = students.some(student => student.grade < 59);
// console.log("hasAnyFailingStudents (some):", hasAnyFailingStudents);

// every

// const hasAllFailingStudents = students.every(student => student.grade < 59);
// console.log("hasAllFailingStudents (every):", hasAllFailingStudents);

function thisExample() {
    console.log(this)
}

const someObj = {
    someMethod() {
        console.log(this)
    },

    childObj: {
        childMethod() {
            console.log(this)
        }
    }   
}

// thisExample.call("custom this");
// someObj.someMethod()
// someObj.childObj.childMethod()

function Company(name) {
    this.name = name
}

// const codefi = new Company("Codefi")
// console.log(codefi)

// const efactory = new Company("Efactory")
// console.log(efactory)

function Product(name, price) {
    this.price = price
    this.name = name

    this.tax = function (pct) {
        console.log(this.price * pct)
    }
}

class Product2 {
    constructor(name, price) {
        this.price = price;
        this.name = name
    }

    tax(pct) {
        //
    }
}


const p1 = new Product("Blender", 30);
const p2 = new Product("Mixer", 20);

p1.tax(0.15);
p2.tax(0.2)