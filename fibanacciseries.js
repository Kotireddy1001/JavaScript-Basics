const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("Enter number of terms: ", (n) => {
  let a = 0, b = 1;
  console.log(a);
  console.log(b);

  for (let i = 2; i < Number(n); i++) {
    let c = a + b;
    console.log(c);
    a = b;
    b = c;
  }
  readline.close();
});
