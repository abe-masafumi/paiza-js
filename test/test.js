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


const arr = [40, 30, 20, 10]
// indexOf
if (arr.indexOf(20) !== -1) {
  console.log(arr.indexOf(20))
  // 2
}
if (arr.indexOf(50) === -1) {
  console.log(arr.indexOf(50))
  // -1
}

// includes
if (arr.includes(20)) {
  console.log(arr.includes(20))
  // true
}
if (!arr.includes(50)) {
  console.log(arr.includes(50))
  // false
}