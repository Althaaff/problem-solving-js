function oddEven(num) {
  let result = "";
  if (num % 2 === 0) {
    result += "You Entered even number";
  } else {
    result += "You Entered odd number";
  }

  return result;
}

console.log(oddEven());
