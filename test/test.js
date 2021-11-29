var num = "192.168.0.1";

let regexp = RegExp(/^\d{1,3}(\.\d{1,3}){3}$/,"g");
let result = regexp.test(num);
console.log(result); // => true
