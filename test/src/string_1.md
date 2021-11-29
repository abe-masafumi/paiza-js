# 文字列の操作

---

1. 文字列を大文字にする {#001}

   ```js
   var text = "syncer";
   console.log(text.toUpperCase());
   // SYNCER
   ```

2. 文字列の指定した文字を変更する

   ```js
   var str = "abcabc";
   console.log(str.replace("a", ""));
   // "bcabc"(最初の'a'しか置換されない)
   ```

   ```js
   var str = "abcabc";
   console.log(str.split("a").join(""));
   // "bcbc"(全ての'a'が置換される)
   ```

   <!-- [参考サイト](https://zukucode.com/2017/04/javascript-string-remove.html) -->

3. 重複する文字列を取り除く

   ```js
   var str = "abcdabcd";
   let tmp = str.split("");
   console.log(tmp);
   //['a', 'b', 'c','d', 'a', 'b','c', 'd']
   tmp = tmp.filter(function (x, i, self) {
     return self.indexOf(x) === i;
   });
   console.log(tmp);
   // [ 'a', 'b', 'c', 'd' ]
   ```

1. 正規表現でポート番号と一致しているか

   [参考資料1](https://rightcode.co.jp/blog/information-technology/javascript-regularexpression)
   [参考資料2](https://javascript.programmer-reference.com/js-regexp-sample/)
   
```js
var num = "192.168.0.1";

let regexp = RegExp(/^\d{1,3}(\.\d{1,3}){3}$/,"g");
let result = regexp.test(num);
console.log(result); // => true
```
