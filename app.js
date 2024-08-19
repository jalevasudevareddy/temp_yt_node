// const name="vasu";
// const parent_name="prabhakar";
// const gardian_name="Narendar";

// console.log(__dirname);
// console.log('-----------------------------');
// console.log(__filename);
// console.log('-----------------------------');
// console.log(module);
// console.log('-----------------------------');
// console.log(process);

// const details = require("./names");
// console.log(details);

// const hiTitle = require("./utils");
// console.log(hiTitle.sayHi("Vasudeva Reddy!!"));

// const os = require("os");
// console.log(os.userInfo());
// console.log(os.type());
// console.log(os.release());
// console.log(os.totalmem());
// console.log(os.freemem());

// const { log } = require('console');
// const path = require('path');
// console.log(path.sep);
// console.log(path.join(__dirname));

// const lodash = require("lodash");
// const item = [1, [2, [2, [4]]]];
// const newItem = lodash.flattenDeep(item);
// console.log(newItem);
//----------------------------------------------------------------
// const EventEmitter = require("events");

// const customEventEmitter = new EventEmitter();
// customEventEmitter.on("response", () => {
//   console.log("Data received: ");
// });

// customEventEmitter.on("response", (name, id) => {
//   console.log(`Data received with user name ${name} and the id ${id} `);
// });

// customEventEmitter.emit("response", "vasu", 32);
//----------------------Streams-----------------------------------------------

// const { createReadStream } = require("fs");
// const server = require("http");
// const stream = createReadStream("./content/big.txt", {
//   highWaterMark: 20000,
//   encoding: "utf8",
// });

// stream.on("data", (data) => {
//   console.log("Received data...", data);
// });

// stream.on("error", (err) => {
//   console.log("Error while reading the file", err);
// });

// var fs = require("fs");
// server
//   .createServer(function (req, res) {
//     const fileStream = createReadStream("./content/big.txt", "utf8");
//     fileStream.on("open", () => {
//       fileStream.pipe(res);
//     });
//     const text = fs.readFileSync("./content/big.txt", "utf8");
//     // res.end(text);
//   })
//   .listen(5000);

//--------------------------------------------------------------
