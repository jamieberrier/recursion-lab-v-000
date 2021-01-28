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

  if (str === "") return str
   
  return reverseString(str.substring(1)) + str[0]


}

// Write out a recursive function to see if a word is a palindrome.
