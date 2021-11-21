# --js 計算方法 (paiza問題で使用)--

> paiza link:

# 配列を文字列に変換

ary = str.split(',');

# 小数点を指定して出力

var n = 12345.6789;
n.toFixed();  

# 文字列を大文字にする

var text = "syncer" ;

var upperCaseText = text.toUpperCase() 

# 文字列の指定した文字を変更する
参考サイト:[https://zukucode.com/2017/04/javascript-string-remove.html]
var str = 'abcabc';
console.log(str.replace('a', '')); // "bcabc"(最初の'a'しか置換されない)

var str = 'abcabc';
console.log(str.split('a').join('')); // "bcbc"

# 負の数を正の数に変換
Math.abs