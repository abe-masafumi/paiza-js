# console 出力

---

1. 改行しないでコンソール出力

   ```js
   //文字列のみ
   process.stdout.write("hoge");
   process.stdout.write("hoge");
   // hogehoge
   ```

2. 配列内を指定した区切りで表示

   ```js
   tmp = tmp.join(",");//カンマ区切りで表示
   console.log(tmp);
   // a,b,c,d
   tmp = tmp.replace(/,/g, " ");
   console.log(tmp.trim()); //スペース区切りで表示
   // a b c d
   ```
