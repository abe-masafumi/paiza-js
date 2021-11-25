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
