const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("Enter a string: ", (str) => {
  let reversed = str.split("").reverse().join("");
  console.log(str === reversed ? "Palindrome" : "Not a Palindrome");
  readline.close();
});
