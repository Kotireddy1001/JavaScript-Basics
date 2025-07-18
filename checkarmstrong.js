const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("Enter a 3-digit number: ", (num) => {
  let n = Number(num);
  let sum = 0, temp = n;

  while (temp > 0) {
    let digit = temp % 10;
    sum += digit ** 3;
    temp = Math.floor(temp / 10);
  }

  console.log(sum === n ? "Armstrong number" : "Not an Armstrong number");
  readline.close();
});
