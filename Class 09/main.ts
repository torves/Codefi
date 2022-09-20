// let username: string = ""
// const num = 123
// username = "123"
// // username = 123
// username = "James' Exampe"
// username = 'James "Woods"'
// username = `James ${num.toString()}`


// Booleans
// let isInstructor = false;
// isInstructor = true;
// isInstructor = false;

// function someFun (opt?: number) {
//   if (typeof opt === "undefined") {
//     // is undefiend
//   }
//   else {
//     // is number
//   }
// }

// someFun()
// someFun(12)

// Arrays and Object Types

// * COMPLEX TYPES START * \\
// Arrays
// let students: Array<string>;
// let students: string[]

// students = ["Quinton", "Betty", "Mary"];

// let mixedBag: any[];

// mixedBag = [2, "Hello", false];

// Objects
// let student: {
//   name: string;
//   age: number;
//   isStudent: boolean;
//   hasPets?: boolean;
// };

// student = {
//   name: "James",
//   age: 30,
//   isStudent: true,
//     // hasPets: true
// };


// Union types

// Type inference & Unions
// let course = "Codefi Coding Bootcamp";
// // course = 123 // Type intferences causes an error

// let bootcamp: string | number;
// bootcamp = "Codefi Coding Bootcamp";
// bootcamp = 123;


// Type Aliases

// Type Aliases
// type CodefiPerson = {
//   name: string;
//   age: number;
//   isStudent?: boolean;
// };

// let randomStudent: CodefiPerson = {
//   name: "James",
//   age: 33,
//   // isStudent: true,
// };
// let currCodeCoach: CodefiPerson = {
//   name: "Chris",
//   age: 99,
//   isStudent: false,
// };

// typing functions and params

// Functions & Parameters
// function add(a: number, b: number) {
//   return a + b;
// }

// function printName(name: string): void {
//   console.log(name);
// }

// const someName = printName("Name")

// const someArr: (string | number)[] = []

// type SomeUnition = string | number
// const someThing: SomeUnition = 123

// * GENERICS START * \\
// function getId<T>(value: T): T {
//   return value;
// }

// let userOneId = getId<String>("stringId_userOne");
// let userTwoId = getId<Number>(new Number("123"));
// let userThreeHasId = getId<Boolean>(true);


// * CLASSES & INTERFACES START * \\

import { StudentInterface } from "./lib";

type One = { x: number }
type Two = One & {y: number}

const three: Two = {
  x: 1,
  y: 1
}

function isString(maybe: unknown): boolean {
  return typeof maybe === "string"
}

const maybeString: string | undefined = "this is a string"
if (isString(maybeString)) {
  console.log(maybeString)
}

class Student implements StudentInterface {
  constructor(
    public first: string,
    public last: string,
    protected isPriv: string,
    private courses: string[]
  ) { 
    // this.first = first;
    // this.last = last;
    // this.courses = courses;
  }

  enroll(courseName: string) {
    this.courses.push(courseName);
  }

  listCourses() {
    return this.courses.slice();
  }
}

const studentOne = new Student("Will", "Wilder", "priv", ["Codefi Front-End Bootcamp"]);
studentOne.enroll("Codefi Back-End Bootcamp");

// studentOne.courses
studentOne.listCourses();

console.log("studentOne:", studentOne);
// CLASSES & INTERFACES END \\



const someObj: StudentInterface = {
  first: "James",
  last: "Woods",
  enroll(courseName: string) {
    this.courses.push(courseName);
  },

  listCourses() {
    return this.courses.slice();
  }
}



