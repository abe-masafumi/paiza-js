# 配列の操作

----

- 配列を文字列に変換

ary = str.split(',');

- 小数点を指定して出力

var n = 12345.6789;
n.toFixed();  



- 負の数を正の数に変換
Math.abs

- 改行しないでコンソール出力
文字列のみ
process.stdout.write('hoge')
process.stdout.write('hoge')

// hogehoge

- 二次元配列の行列を転置
array = [[1,2,3],[1,2,3],[1,2,4]]
  const transpose = a => a[0].map((_, c) => a.map(r => r[c]));
  const arr = transpose(array);

