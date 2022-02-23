process.stdin.resume().setEncoding("utf8");
const args = [];
require("readline")
  .createInterface({ input: process.stdin })
  .on("line", (input) => args.push(input))
  .on("close", main);

function main() {
  // ここからコードを書き始める
  // 設定配列を分解
  const lines0 = args[0].split(" ");
  // forで回す配列を作成
  let array = [];
  for (let i = 1; i < args.length; i++) {
    array.push(args[i].split(" "));
  }

  let r = lines0[1] * 2
  
  for (let i = 0; i < lines0[0]; i++) {
      if (array[i][0] >= r && array[i][1] >= r && array[i][2] >= r) {
          console.log(i + 1);
      }
  }
}