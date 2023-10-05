const input = require('prompt-sync')({ sigint: true });

const reg = /^.*$/;
const str = "ab";
console.log(reg.exec(str));