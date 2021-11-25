# paiza

---

[paiza](https://paiza.jp/career/mypage)

- 合格しなかった問題

1. B099:台風の接近 再チャレンジ採点結果

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
