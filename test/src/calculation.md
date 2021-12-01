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

1. 小数点を指定して四捨五入

   ```js
   var num = 123.456;

   console.log(Math.round(num * 10));
   // 123

   console.log(Math.round(num * 10) / 10);
   // 123.5
   ```

1. 小数点を指定して繰上げ

   ```js
   var num = 123.456;

   console.log(Math.ceil(num));
   // 124

   console.log(Math.ceil(num * 10) / 10);
   // 123.5
   ```

1. 小数点を指定して切り捨て

   ```js
   var num = 123.456;

   console.log(Math.floor(num));
   // 123
   console.log(Math.floor(num * 10) / 10);
   // 123.4
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

1. 小数点以下のみを取得

   ```js
   function getAfterPoint(num) {
     var arr = String(num).split(".");

     // 小数点以下がある場合と、ない場合
     if (arr[1]) {
       // 先頭に '0.' をつける
       return Number("0." + arr[1]);
     } else {
       return 0; // 小数点以下がない場合は0を返す
     }
   }
   ```

1. ２つの座標の距離の計算

   ```js
   var x1 = 20;
   var y1 = 10;
   var x2 = 25;
   var y2 = 10;

   var a = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
   console.log(a);
   // 5
   ```

1. 三角関数(Math.sin, Math.cos, Math.tan, etc)

   ```js
   //sinを求める
   console.log(Math.sin(Math.PI / 6)); // Math.PI/6 = 30°
   // 0.49999999999999994

   console.log(Math.sin(Math.PI / 4)); // Math.PI/4 = 45°
   // 0.7071067811865475
   ```

   ```js
   // cosを求める
   console.log(Math.cos(Math.PI / 3)); // Math.PI/3 = 60°
   // 0.5000000000000001

   console.log(Math.cos(Math.PI / 4)); // Math.PI/4 = 45°
   // 0.7071067811865476
   ```

   ```js
   // tanを求める
   console.log(Math.tan(Math.PI / 3)); // Math.PI/3 = 60°
   // 1.7320508075688767

   console.log(Math.tan(Math.PI / 4)); // Math.PI/4 = 45°
   // 0.9999999999999999
   ```
