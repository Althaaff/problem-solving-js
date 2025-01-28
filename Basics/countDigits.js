function countNumOfDigits(num) {
  num = Math.abs(num);

  let count = 0;

  do {
    count++;
    num = Math.floor(num / 10);
  } while (num > 0);

  return count;
}

console.log(countNumOfDigits(1234));
