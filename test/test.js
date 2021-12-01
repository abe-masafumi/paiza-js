// Bダーツの問題（解けない）
// // y = oy + xtan0 - (gy^ / 2s^cos^0)
// var o_y = 10 
// var s = 10 
// var deg = 10 

// var x = 10 
// var y = 10 
// var a = 10 
// var g = 9.8
// var tan0 = y / x
// var cos0 = Math.sqrt(y / 2);
// // console.log(tan0);
// // console.log(cos0);
// y = ( o_y ) + ( x * tan0 * deg)
// yy = ( g * ( x * x )) / ( 2 * ( s * s ) * (cos0 * cos0) * deg)
// console.log(y - yy)
// // console.log(yy)

// --ダーツ終わり--

// 🤗次回のpaiza会
// C010:安息の地を求めて

// 提出前動作確認の入力値
const lines = new Array(5)
lines[0] = "20 10 10"
lines[1] = "3"
lines[2] = "25 10"
lines[3] = "20 15"
lines[4] = "70 70"


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
    const lines0 = lines[0].split(" ");
    let array = [];
    for (let i = 2; i < lines.length; i++) {
      array.push(lines[i].split(" "));
    }
    var x1 = Number(lines0[0]);
    var y1 = Number(lines0[1]);
    for (let i = 0;i< lines[1];i++) {
        var a = Math.sqrt(Math.pow(Number(array[i][0])-x1,2) + Math.pow(Number(array[i][1])-y1,2));
        if (a >= Number(lines0[2])) {
            console.log('silent')
        } else {
            console.log('noisy')
        }
    }
// });


