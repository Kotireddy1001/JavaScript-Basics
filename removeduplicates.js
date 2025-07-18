const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("Enter numbers with duplicates (space separated): ", (input) => {
  let arr = input.split(" ").map(Number);
  let uniqueArr = [...new Set(arr)];
  console.log("Unique array:", uniqueArr);
  readline.close();
});
