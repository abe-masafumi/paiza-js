var x1 = 20 ;
var y1 = 10 ;
var x2 = 25 ;
var y2 = 10 ;

var a = Math.sqrt(Math.pow(x2-x1,2) + Math.pow(y2-y1,2));
console.log(a)
// 5




// C010:安息の地を求めて
// process.stdin.resume();
// process.stdin.setEncoding('utf8');
// // 自分の得意な言語で
// // Let's チャレンジ！！
// var lines = [];
// var reader = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
// reader.on('line', (line) => {
//   lines.push(line);
// });
// reader.on('close', () => {
//     const lines0 = lines[0].split(" ");
//     let array = [];
//     for (let i = 2; i < lines.length; i++) {
//       array.push(lines[i].split(" "));
//     }
//     var x1 = Number(lines0[0]);
//     var y1 = Number(lines0[1]);
//     for (let i = 0;i< lines[1];i++) {
//         var a = Math.sqrt(Math.pow(Number(array[i][0])-x1,2) + Math.pow(Number(array[i][1])-y1,2));
//         if (a >= Number(lines0[2])) {
//             console.log('silent')
//         } else {
//             console.log('noisy')
//         }
//     }
// });