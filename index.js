function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++){
    for (let j = i + 1; j < array.length; j++){
      if (array[i] + array[j] === target) return true
    } 
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
  0(n^2)
*/

/* 
  Add your pseudocode here
  function takes an array and target number
    checks the first number against the rest of the numbers in the array
      if the pair adds up to target return true
      if not return false
*/

/*
  Add written explanation of your solution here
  function will grab the starting number in the array and loop through the rest
  of it checking to see if any pair add up to target. this will continue until the 
  end of the array. if a pair adds up to the target it returns true if not false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("")

  console.log(hasTargetSum([1,1], 2))
  console.log(hasTargetSum([1, 3, 7, 9], 10))
}

module.exports = hasTargetSum;
