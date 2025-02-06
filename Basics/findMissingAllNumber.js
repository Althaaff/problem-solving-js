// find all missing number in the array input ?

// function findMissingAllNumber(arr) {
//   let missing = [];

//   // let min = arr[0]; // min start from the first number in the array
//   // let max = arr.length - 1; // find last number in the array ;

//   let min = Math.min(...arr);
//   let max = Math.max(...arr);

//   console.log("min :", min);
//   console.log("max :", max);

//   for (let i = min; i <= max; i++) {
//     if (!arr.includes(i)) {
//       missing.push(i);
//     }
//   }

//   return missing;
// }

// console.log(findMissingAllNumber([1, 3, 4, 6, 8, 9]));

function findMissingAllNumber(arr) {
  let missing = [];
  let expected = arr[0];

  for (let num of arr) {
    while (num > expected) {
      missing.push(expected);

      expected++;
    }
    expected++;
  }

  return missing;
}

console.log(findMissingAllNumber([1, 2, 3, 5, 7, 9]));
