// var num = "abc";
// var anser = "abc";
// var line0 = num.split('')
// var anser0 = anser.split('')
// for (let i = 0; i < anser0.length; i++) {
//   console.log(line0[i])
//   console.log(anser0[i])
//   let regexp = RegExp(anser0[i],"g");
//   let result = regexp.test(num);
//   console.log(result); // => true
// }

var email = "masa455.wv@gmail.com";
let regexp = RegExp(/.+@.+\.com+/, "g");
let result = regexp.test(email);
let match = email.match(regexp);
console.log(result);
// true
console.log(match);
//[ 'masa455.wv@gmail.com' ]
