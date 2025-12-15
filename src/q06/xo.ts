

const xo = process.argv[2];
const n = Number(xo);

if (!Number.isInteger(n) || n < 1) {
  console.log("Invalid Input");
  process.exit(0);
}

let result: string[] = [];

for (let i = 0; i < n; i++) {
  if (i === 0 || i === n - 1) {
    result.push("x".repeat(n));
  } else {

    result.push("x" + "o".repeat(n - 2) + "x");
  }
}


console.log(result.join("\n"));
