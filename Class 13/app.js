// (function () {
//   let name = "Amy"


//   function updateNames(name) {
//     // Replace all occurances of 'John' with variable name.
//     let sentence = "Hello, my name is John. My friend's name is also John.";
//     // Build your logic here
//     // return sentence.replaceAll('John', name)
//     // Regex solution using replace and global 'g' flag.
//     return sentence.replace(/John/g, name)
//   }

//   const n = updateNames(name); // "Hello, my name is Amy. My friend's name is also Amy."
//   console.log(n)
// })()


// (function () {
//   let sentence = "My name is John!";

//   function reverse(str) {
    
//   }

//   const r = reverse(sentence)
//   console.log(r); // "!nhoJ si eman yM"
// })()


// Local Storage Example
window.localStorage.setItem('my-data', JSON.stringify({
  name: "James Woods",
  occupation: "Programming",
}))

const obj = JSON.parse(window.localStorage.getItem('my-data'))
console.log(obj)