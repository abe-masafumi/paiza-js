process.stdin.resume().setEncoding("utf8");
const args = [];
require("readline")
  .createInterface({ input: process.stdin })
  .on("line", (input) => args.push(input))
  .on("close", main);

function main() {
  const lines0 = args[0].split(" ");

  let array = [];
  for (let i = 1; i < args.length; i++) {
    array.push(args[i].split(" "));
  }
  // console.log(array)
  for (let i = 0; i < lines0[0]; i++) {
          let regexp = RegExp(/^\d{1,3}(\.\d{1,3}){3}$/,"g");
  let result = regexp.test(array[i]);
  if (result) {
      console.log("True");
  } else {
      console.log("False")
  }
  }
}