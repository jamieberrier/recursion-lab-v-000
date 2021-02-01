// To solve the problems below, use the technique we just learned for finding recursive solutions. 
// Remember:

// Apply the problem to a specific case (i.e., choose an example).
// Write out a function that solves that particular example.
// Reword that function so that it uses recursion, invoking itself.

// Code your solution here!

// Write a recursive function to print out all of the characters in a string.
function printString(myString) {
  console.log(myString[0]);
 
  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}

// Write out a recursive function to reverse a string.
function reverseString(str) {
  // if (str === "") {
  //   return str
  // } else {
  //   return reverseString(str.substring(1)) + str[0]
  // }

  // if (str === "") return str
   
  // return reverseString(str.substring(1)) + str[0]

   
  return str ? reverseString(str.substring(1)) + str[0] : str
}

// Write out a recursive function to see if a word is a palindrome.
// abba
// check if first and last are same
function isPalindrome(str) {
  if (str.length > 1 && str[0] === str[str.length - 1]) {
    isPalindrome(str.substring(1, str.length - 1))
    return true
  } else if (str.length === 1) {
      return true
  } else {
       return false
  }
}

// sums all members up to a given index in an array
// addUpTo([1,2,3,4], 2) => 6
function addUpTo(nums, index) {
  if (index > 0) {
    nums[0] = nums[0] + nums[index]
    addUpTo(nums, --index)
  }

  return nums[0]
}

// finds the largest integer in an array
// maxOf([1, 4, 5, 3]) => 4
function maxOf() {

}