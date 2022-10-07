// Exercise 1
function exercise1() {
  // Use a loop to print the following to the console:
  // *
  // **
  // ***
  // ****
  // *****

  // let s = ''
  // for (let i = 0; i < 5; ++i) {
  //   s += '*'
  //   console.log(s)
  // }

  // function loop(n) {
  //   for (let i = 0; i < n; i++) {
  //     console.log('*'.repeat(i))
  //   }
  // }

  // loop(5)
}


//   Exercise 2
function exercise2() {
  // Use a loop to print the following to the console:
  //   -* ---
  // --*** --
  // -***** -

  function loop(n) {
    for (let i = 1; i <= n; i++) {
      let s = '_'.repeat(n-i);
      let s2 = '*'.repeat(i*2-1);
      console.log(s + s2 + s);
    }
  }

  loop(10)
}


exercise1()
exercise2()