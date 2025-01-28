function finMissingNum(nums) {
  let expectedSum = (nums.length * (nums.length + 1)) / 2;

  let actualSum = 0;
  for (let i = 0; i < nums.length; i++) {
    actualSum += nums[i];
  }

  return expectedSum - actualSum;
}

console.log(finMissingNum([0, 1, 3, 4, 5, 6])); // Output: 2
