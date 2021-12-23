# 連想配列の操作

---

1. からの連想配列を作成

   ```js
   const Datalist = {};
   // or
   var Datalist = new Object();
   ```

1. 基本的な定義

   ```js
   const player = {
     name: "abe",
     data: { age: 20, team: "Juventus" },
   };
   ```

1. json 形式を綺麗に console 出力する方法

   ```js
   const str2 = JSON.stringify(Datalist, null, 2);
   console.log(str2)
    {
     "player": {
       "0": {
         "name": "abe",
         "data": {
            "age": 20,
            "team": "Juventus"
          }
        }
      }
   }
   ```

1. for_in と for_of の違い

   ```js
   var array = [1, 5, 9];
   for (key in array) {
     console.log(key);
     // 0
     // 1
     // 2
   }
   for (key of array) {
     console.log(key);
     // 1
     // 5
     // 9
   }
   ```

  > for_ofでkeyも取得する方法

  [参考資料](https://1-notes.com/javascript-for-of-key-and-value/)


1. 連想配列に配列を追加(pushが使える)

   ```js
   Datalist["results"] = [];
   Datalist["results"].push({"day": Datalist["data"][i][0] ,"abe": count }) 
   // or
   Datalist["results"] = [];
   Datalist["results"][i]={"day": Datalist["data"][i][0] ,"abe": count }
   ```

1. 連想配列のmap処理

    ```js
    [
      { day: '19', abe: 60 },
      { day: '20', abe: 90 },
      { day: '21', abe: 100 },
      { day: '22', abe: 50 },
      { day: '23', abe: 110 }
    ]
    var average = Datalist["results"].map(function (p) {
      return p.abe;
    });
    // [ 60, 90, 100, 50, 110 ]
    const result = average.indexOf(Math.min.apply(null, average));
    // 3 (index)
    console.log(Datalist["results"][result]["day"])
    // 22
    console.log(Math.min(...arr.map((p) => p.age))); // 18
    ```

1. 連想配列で”key”だけや”value”だけを取得する方法
    
    [参考資料](https://twotone.me/web/5329/)
