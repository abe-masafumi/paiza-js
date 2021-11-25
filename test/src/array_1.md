# 配列の操作

---

1.  配列内の文字列を区切り方を指定して文字列に変換

```js
let ary = ["1000 2000 3000"];
const result = ary[0].split(" ");
console.log(result);
```

1. 小数点を指定して出力

   ```js
   var n = 12345.6789;
   // 以下繰上げ
   console.log(n.toFixed());
   // 12346
   console.log(n.toFixed(2));
   // 12345.68
   ```

1. 負の数を正の数に変換

   ```js
   console.log(Math.abs(-1));
   // 1
   ```

1. 二次元配列の行列を転置

   ```js
   array = [
     [1, 2, 3],
     [1, 2, 3],
     [1, 2, 4],
   ];
   const transpose = (a) => a[0].map((_, c) => a.map((r) => r[c]));
   const arr = transpose(array);
   console.log(arr);
   // [ [ 1, 1, 1 ], [ 2, 2, 2 ], [ 3, 3, 4 ] ]
   ```

1. 配列の中から最小値と最大値を取得
   ```js
   let array = [1, 2, 3, 4, 5, 6, 7];
   let result = [];
   result.push(Math.min.apply(null, array));
   result.push(Math.max.apply(null, array));
   console.log(result);
   // [ 1, 7 ]
   ```
