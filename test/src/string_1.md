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

4. 正規表現でポート番号と一致しているか

   [正規表現 MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Regular_Expressions)

   [参考資料 1](https://rightcode.co.jp/blog/information-technology/javascript-regularexpression)

   [参考資料 2](https://javascript.programmer-reference.com/js-regexp-sample/)
   URL,郵便番号（999-9999 形式）, IP（999.999.999.999 形式）の参考例

   [IP アドレス(IPv4)の正規表現](https://www.javadrive.jp/regex-basic/sample/index4.html)

   [正規表現いろいろ](https://www.megasoft.co.jp/mifes/seiki/index.html)

   [正規表現チート](https://murashun.jp/article/programming/regular-expression.html)

   ```js
   var num = "192.168.0.1";

   let regexp = RegExp(/^\d{1,3}(\.\d{1,3}){3}$/, "g");
   let result = regexp.test(num);
   console.log(result); // => true
   ```

5. 正規表現でメールアドレスかチェック

   ```js
   var email = "masa455.wv@gmail.com";
   let regexp = RegExp(/.+@.+\.com+/, "g");
   let result = regexp.test(email);
   let match = email.match(regexp);
   console.log(result);
   // true
   console.log(match);
   //[ 'masa455.wv@gmail.com' ]
   ```

6. 文字列の中に指定した文字列が何回出現するかを数えてその全ての index を配列で返す

   ```js
   var num = "192.168.[0-100].]";
   //(記号の検索には不向き)
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
   console.log(lookingforindexall(num, 1));
   // [1]の出現回数は[3]回
   // [ 0, 4, 11 ]
   ```

1. 文字列の中に指定した値がいくつ含まれているか
   
   ```js
   var num = "192.168.[0-100].]";
   //(記号検索も可能)
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

   console.log(occurrences(num, "]"));
   // 2
   console.log(occurrences("foofoofoo", "foo"));
   // 3
   console.log(occurrences("foofoofoo", "foofoo"));
   // 1
   console.log(occurrences("foofoofoo", "foofoo", true));
   // 2
   ```
