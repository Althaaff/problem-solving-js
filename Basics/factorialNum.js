// Using a Loop (Iterative Method)

// function factorialNum(num) {
//   if (num < 0) {
//     return "Factorial not defined for negative numbers";
//   }

//   let fact = 1;

//   for (let i = 2; i <= num; i++) {
//     fact *= i;
//   }

//   return fact;
// }

// console.log(factorialNum(5));

// 2nd Approach :
// Using Recursion
// function factorialNum(num) {
//   if (num < 0) {
//     return "Factorial not defined for negative numbers!";
//   }

//   if (num === 0 || num === 1) {
//     return num;
//   }

//   return num * factorialNum(num - 1);
// }

// console.log(factorialNum(5));

// 3rd Approach :
// using reduce method :
function factorialNum(n) {
  if (n < 0) {
    return "Factorial not defined for negative numbers! ";
  }

  return n === 0
    ? 1
    : Array.from({ length: n }, (_, i) => i + 1).reduce(
        (acc, curr) => acc * curr,
        1
      );
}
console.log(factorialNum(5));

// const array = new Array(5).keys();

// console.log(array);
