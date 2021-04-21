function rotateArray(arr, k) {
  // type your code here
  const actualRot = k % arr.length 
  const splicedArr = arr.splice(-actualRot, actualRot)
  const returnArr = [...splicedArr, ...arr]
  return returnArr
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [4, 1, 2, 3]");
  console.log("=>", rotateArray([1, 2, 3, 4], 1));

  console.log("");

  console.log("Expecting: [2, 3, 1]");
  console.log("=>", rotateArray([1, 2, 3], 2));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", rotateArray([1, 2, 3], 3));
}

module.exports = rotateArray;

// Please add your pseudocode to this file
// And a written explanation of your solution

// splice the old array and take the number of values from the end, spread out the old array of values into the end of the new array that splice returned.
