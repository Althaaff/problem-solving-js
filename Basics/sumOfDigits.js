function sumOfDigits(num) {
  let sum = 0;

  // To handle negative numbers, you need to take the absolute value of num before processing it. You can use Math.abs() for this. :
  num = Math.abs(num);

  while (num > 0) {
    sum = sum + (num % 10);

    num = Math.floor(num / 10);
  }

  return sum;
}

console.log(sumOfDigits(1287));
console.log(sumOfDigits(4));
console.log(sumOfDigits(-12345));
