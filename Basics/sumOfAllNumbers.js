function sumOfNumbers(num) {
  let sum = 0;

  for (let i = 1; i <= num; i++) {
    sum = sum + i;
  }

  return sum;
}

console.log(sumOfNumbers(3));
