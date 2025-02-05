function finMissingNum(nums) {
  let expectedSum = (nums.length * (nums.length + 1)) / 2;
  console.log(expectedSum);

  let actualSum = 0;
  for (let i = 0; i < nums.length; i++) {
    actualSum += nums[i];
  }

  console.log(actualSum);

  return expectedSum - actualSum;
}

console.log(finMissingNum([0, 1, 3, 4, 5, 6])); // Output: 2
