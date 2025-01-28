function fizBuzz() {
  for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("Fizz Buzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Fizz");
    } else {
      console.log("numers :", i);
    }
  }
}

fizBuzz();

// another way :
// function fizzBuzz() {
//   let results = [];

//   for (let i = 0; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       results.push("Fizz buzz");
//     } else if (i % 3 === 0) {
//       results.push("buzz");
//     } else if (i % 5 === 0) {
//     } else {
//       results.push(i);
//     }
//   }

//   return results;
// }

// console.log(fizzBuzz());
