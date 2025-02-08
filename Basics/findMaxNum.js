// function maxNum(arr) {
//   let max = arr[0];

//   for (i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }

//   return max;
// }

// console.log(maxNum([1, 3, 4, 6, 9]));

function maxNum(arr) {
  return arr.reduce((max, current) => {
    return current > max ? current : max;
  }, -Infinity);
}

console.log(maxNum([1, 3, 6, 8]));
