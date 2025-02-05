function isPalindromeNumber(x) {
  let copyNum = x;
  let reversedNum = 0;

  while (copyNum > 0) {
    const lastDigit = copyNum % 10;

    reversedNum = reversedNum * 10 + lastDigit;

    copyNum = Math.floor(copyNum / 10);
  }

  return x === reversedNum;
}

console.log(isPalindromeNumber(121));
