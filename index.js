function reverseString(word){
  return word.split("").reverse().join("")
}
function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = reverseString(word);
  return word === reversedWord
}

/* 
  Add your pseudocode here

  need to make a function that reverses the string 
  returns true if original and reverse are identical
  otherwise return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
