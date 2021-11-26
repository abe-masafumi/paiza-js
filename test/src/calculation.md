# 計算

---

1. 値段の％を計算

   ```js
   var price = 1000;
   // priceの10%を求める計算
   console.log(price * 0.1);
   // 100
   ```

1. 配列の中を全て足し算する
   ```js
   // 配列arrayの値を加算する
   function sum(array) {
     // 合計を格納する変数
     var sum = 0;
     // 配列の長さまで
     for (var i = 0; i < array.length; i++) {
       // ひとつずつ足していく
       sum += array[i];
     }
     // 結果を返却
     return sum;
   }
   const array = [1, 2, 3, 4, 5];
   console.log(sum(array));
   // 15
   ```
