// const { readFileSync, writeFileSync } = require("fs");

// const first = readFileSync("./content/first.txt", "utf8");
// const second = readFileSync("./content/second.txt", "utf8");
// console.log(first,' ', second);
// writeFileSync("./content/third.txt", `${first} and ${second}`);

///////synchronous will continously execute the prgram(above code)

///////asynchronous will parlally execute the prgram(below code)

const { readFile, writeFile } = require("fs");

const first = readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    throw err;
  } else {
    writeFile(
      "./content/fourth.txt",
      `The result is printed here : ${result}`,
      (err, result) => {
        if (err) {
          throw err;
        } else {
          console.log(result);
        }
      }
    );
  }
});

writeFile(
  "./content/fourth.txt",
  `The result is printed here : ${first}`,
  (err, result) => {
    if (err) {
      throw err;
    } else {
      console.log(result);
    }
  }
);
