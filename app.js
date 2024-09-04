require("./xyz.js");

const util = require("node:util");

const { calculateSum, calculateMultiply } = require('./calculate');
const data = require("./data.json");

console.log(data);

var a = 10;
var b = 20;

calculateSum(a, b);
calculateMultiply(a, b);
