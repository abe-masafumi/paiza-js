# paiza

---

[paiza](https://paiza.jp/career/mypage)

- paiza でよく使う処理

  > 配列内を使いやすい形に変換

  ```js
  // 設定配列を分解
  const lines0 = lines[0].split(" ");
  // forで回す配列を作成
  let array = [];
  for (let i = 2; i < lines.length; i++) {
    array.push(lines[i].split(" "));
  }
  // console.log(array)
  ```

  ```js
  // mapを使って全ての配列を分解
  const array = lines.map((line) => line.split(" ").map(Number));
  ```

---

- 合格しなかった問題

1. B099:台風の接近 再チャレンジ採点結果

   > 理由

   >

   ```js
   process.stdin.resume();
   process.stdin.setEncoding("utf8");
   // 自分の得意な言語で
   // Let's チャレンジ！！
   var lines = [];
   var reader = require("readline").createInterface({
     input: process.stdin,
     output: process.stdout,
   });
   reader.on("line", (line) => {
     lines.push(line);
   });
   reader.on("close", () => {
     const line0 = lines[0].split(" ");
     const maxcount = Number(line0[1]);

     let array = [];
     for (let i = 1; i < lines.length; i++) {
       array.push(lines[i].split(" "));
     }

     const transpose = (a) => a[0].map((_, c) => a.map((r) => r[c]));
     const arr = transpose(array);

     let elsecount = 0;
     let count = 0;
     let str = "";
     // console.log(arr)
     arr.forEach((value, index, thisarray) => {
       for (let u = 0; u < value.length; u++) {
         if (value[u] < Number(maxcount)) {
           count++;
           if (count == 3) {
             let num = index + 1;
             str += String(num) + " ";
           }
         } else {
           elsecount++;
         }
       }
       count = 0;
     });
     if (elsecount == arr.length * arr[0].length) {
       console.log("wait");
     }
     elsecount = 0;

     console.log(str.trim());
   });
   ```

2. C006:ハイスコアランキング

   > 理由

   > Math.round()が切り捨てになる(バグ？)

   > 解決

   > 四捨五入するタイミングが間違っていた 

   ```js
   process.stdin.resume();
   process.stdin.setEncoding("utf8");
   // 自分の得意な言語で
   // Let's チャレンジ！！
   var lines = [];
   var reader = require("readline").createInterface({
     input: process.stdin,
     output: process.stdout,
   });
   reader.on("line", (line) => {
     lines.push(line);
   });
   reader.on("close", () => {
     function sum(array) {
       var sum = 0;
       for (var i = 0; i < array.length; i++) {
         sum += array[i];
       }
       return sum;
     }

     const lines0 = lines[0].split(" ");
     const lines1 = lines[1].split(" ");

     let array = [];
     for (let i = 2; i < Number(lines0[1]) + 2; i++) {
       array.push(lines[i].split(" "));
     }

     // console.log(array[0][0])
     let results = new Array(Number(lines0[1]));

     for (let u = 0; u < Number(lines0[1]); u++) {
       results[u] = new Array(Number(lines0[0]));
       for (let i = 0; i < Number(lines0[0]); i++) {
         // console.log(Number(lines1[i]))
         let a = Number(array[u][i]) * Number(lines1[i]);
         <!-- ここの動作がおかしい↓ ()-->
         let math = Math.round(a);
         results[u][i] = math;
       }
       results[u] = sum(results[u]);
     }

     function top_x(array, x) {
       let arr = [];
       for (let i = 0; i < x; i++) {
         const maxindex = array.indexOf(Math.max(...array));
         arr.push(...array.splice(maxindex, 1));
       }
       // console.log(arr); // [ 7, 6, 5 ]
       return arr;
     }
     const anser = top_x(results, Number(lines0[2]));
     tmp = anser.join(",");

     console.log(tmp.replace(/,/g, "\n"));
   }); //238.5  483.6 64 35971.2
   ```
