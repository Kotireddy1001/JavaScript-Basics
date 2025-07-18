const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("Enter a string: ", (text) => {
  let count = 0;
  for (let char of text.toLowerCase()) {
    if ("aeiou".includes(char)) count++;
  }
  console.log("Vowel count:", count);
  readline.close();
});
