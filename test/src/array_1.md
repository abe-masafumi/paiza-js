# 配列の操作

---

1.  配列内の文字列を区切り方を指定して文字列に変換

    ```js
    let ary = ["1000 2000 3000"];
    console.log(ary[0].split(" "));
    // [ '1000', '2000', '3000' ]
    ```

2.  二次元配列の行列を転置

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

3.  配列の中から最小値と最大値を取得

    ```js
    let array = [1, 2, 3, 4, 5, 6, 7];
    let result = [];
    result.push(Math.min.apply(null, array));
    result.push(Math.max.apply(null, array));
    console.log(result);
    // [ 1, 7 ]
    ```

4.  配列の中から最大値トップ 3 を取得

    ```js
    const point = [1, 2, 3, 4, 5, 6, 7];
    console.log(point); // [1, 2, 3, 4,5, 6, 7]
    console.log(...point); // 1 2 3 4 5 6 7
    // 最大値のindex番号を調べる
    function top_x(array, x) {
      let arr = [];
      for (let i = 0; i < x; i++) {
        const maxindex = array.indexOf(Math.max(...array));
        arr.push(...array.splice(maxindex, 1));
        console.log(arr); // [ 7, 6, 5 ]
      }
      return arr;
    }
    console.log(top_x(point, 4));
    // [ 7, 6, 5, 4 ]
    ```

5.  array.splice の使い方

    ```js
    const months = ["Jan", "March", "April", "June"];
    // 配列内を操作する
    //splice(変更するindex、削除数、追加する値)＊定数を定義すると削除した値のみで新しい配列が作られる
    let arr = months.splice(1, 1, "Feb");
    console.log(months); // [ 'Jan', 'Feb', 'April', 'June' ]
    console.log(arr); // [ 'March' ]

    arr.push(String(months.splice(3, 1, "May"))); // 値のタイプを指定するとpush時に綺麗な配列ができる
    console.log(months); // [ 'Jan', 'Feb', 'April', 'May' ]
    console.log(arr); // [ 'March', 'June' ]
    ```

6.  配列に特定要素が含まれるか

    ```js
    const arr = [40, 30, 20, 10];
    // indexOf
    if (arr.indexOf(20) !== -1) {
      console.log(arr.indexOf(20));
      // 2
    }
    if (arr.indexOf(50) === -1) {
      console.log(arr.indexOf(50));
      // -1
    }

    // includes
    if (arr.includes(20)) {
      console.log(arr.includes(20));
      // true
    }
    if (!arr.includes(50)) {
      console.log(arr.includes(50));
      // false
    }
    ```
