# 文字列の操作

---

1. 文字列を大文字にする {#文字列を大文字にする}

   ```js
   var text = "syncer";

   var upperCaseText = text.toUpperCase();
   ```

1. 文字列の指定した文字を変更する

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

1. 重複する文字列を取り除く

   ```js
   var str = "abcdabcd";
   let tmp = str.split("");
   tmp = tmp.filter(function (x, i, self) {
     return self.indexOf(x) === i;
   });
   tmp = tmp.join(",");
   tmp = tmp.replace(/,/g, " ");

   console.log(tmp.trim());
   ```
