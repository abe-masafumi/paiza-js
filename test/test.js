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

// var num = "192.168.100.100";
// // 0から100までのチェック
// let regexp = RegExp(/192.168.([1-9]?[0-9]?0)\.\d*$/, "g");
// let result = regexp.test(num);
// console.log(result); // => true

var num = "192.168.[0-100].*";
var res = "192.168.109.20";
const a = num.split(".");
const b = res.split(".");
// console.log(a)
// console.log(b)
// console.log(num.indexOf('1',1))
// let scrap = ["[","]","-"]
// let str = ""
let t = [];
a.forEach((element, index, array) => {
  if (element == b[index]) {
    // console.log('同じ',element,b[index])
    // str += element +"."
    t.push(true);
  } else {
    if (element.includes("-")) {
      // let tt = element
      let h = element.replace("[", "");
      h = h.replace("]", "");
      h = h.split("-");
      // console.log('違う処理',h[0],b[index],h[1]);
      t.push(
        Number(h[0]) <= Number(b[index]) && Number(b[index]) <= Number(h[1])
      );
    } else if (element.includes("*")) {
      // console.log('何でもいいよ',element);
      t.push(true);
    }
  }
  console.log(t);

  // console.log(element,b[index])
  // console.log(index)
  // console.log()
});
if (t.includes(false)) {
    t = false
  } else {
    t = true
  }
  console.log(t);

// 文字列の中に指定した文字列が何回出現するかを数えてその全てのindexを配列で返す(記号の検索には不向き)
function lookingforindexall(str, txt) {
  let index = 0;
  const arr = [];
  var count = (str.match(new RegExp(txt, "g")) || []).length;
  console.log(`[${txt}]の出現回数は[${count}]回`);
  for (let i = 0; i < count; i++) {
    index = num.indexOf(txt, index);
    arr.push(index);
    index++;
  }
  return arr;
}
// console.log(lookingforindexall(num,1))
// [1]の出現回数は[3]回
// [ 0, 4, 11 ]

// if (num.includes('[')) {
//     console.log(num.indexOf('[',"g"))
//     console.log(num.indexOf(']',"g"))

// }else {
//     console.log('u');
// }

function occurrences(string, subString, allowOverlapping) {
  string += "";
  subString += "";
  if (subString.length <= 0) return string.length + 1;
  var n = 0,
    pos = 0,
    step = allowOverlapping ? 1 : subString.length;
  while (true) {
    pos = string.indexOf(subString, pos);
    if (pos >= 0) {
      ++n;
      pos += step;
    } else break;
  }
  return n;
}

// console.log(occurrences(num, "]"));
// // 2
// console.log(occurrences("foofoofoo", "foo"));
// // 3
// console.log(occurrences("foofoofoo", "foofoo"));
// // 1
// console.log(occurrences("foofoofoo", "foofoo", true));
// // 2
