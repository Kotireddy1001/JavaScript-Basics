const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("Enter numbers separated by space: ", (input) => {
  let arr = input.split(" ").map(Number);
  arr.sort((a, b) => a - b);
  console.log("Sorted array:", arr);
  readline.close();
});
