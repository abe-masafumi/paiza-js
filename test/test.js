const Datalist = {}
Datalist["player"] = {}

const data1 = {
   name: "abe",
   data:{age:20,team: "Juventus"},
  };

const data2 = {
  name: "abe",
  data:{age:20,team: "Juventus"},
 };

 Datalist["player"][0] = data1
//  Datalist["player"][1] = data2

const str2 = JSON.stringify(Datalist, null, 2);
console.log(str2)


var array = [1, 5, 9];
for (key in array) {
  console.log(key)
  // 0
  // 1
  // 2
}
for (key of array) {
  console.log(key)
  // 1
  // 5
  // 9
}
