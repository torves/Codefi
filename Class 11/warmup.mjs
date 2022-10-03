import { calculate, list } from "./exercises.mjs"


// console.log( calculate(1, 1, "+") ); // 2
// console.log(calculate(2, 2, '-')); // 0

let thingWerePrintingToPage = `${list.reduce((a, current) => {
  a += `
  ID: ${current.id}
  Status: ${current.completed}
  Action: ${current.action}

  `

  return a
}, '')}`

console.log(thingWerePrintingToPage);