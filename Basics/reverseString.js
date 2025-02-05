function reverseString(str) {
  let reversedString = [];

  for (i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }

  return reversedString;
}

// console.log(reverseString("racecar"));

const reversed = reverseString("hello");

console.log(reversed);
