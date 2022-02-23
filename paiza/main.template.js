process.stdin.resume().setEncoding("utf8");
const args = [];
require("readline")
  .createInterface({ input: process.stdin })
  .on("line", (input) => args.push(input))
  .on("close", main);

function main() {
  // ここからコードを書き始める
  console.log(args);
}