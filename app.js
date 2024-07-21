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

const lodash = require("lodash");
const item = [1, [2, [3, [4]]]];
const newItem = lodash.flattenDeep(item);
console.log(newItem);
