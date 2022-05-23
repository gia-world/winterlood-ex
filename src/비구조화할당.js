// let arr=["one","two","three"]
// // let one=arr[0]
// // let two=arr[1]
// // let three=arr[2]
// let [one,two,three]=arr;
let [one1, two1, three1, four1 = "four"] = ["one", "two", "three"];
console.log(one1, two1, three1, four1);
//위치 바꾸기
let a = 10;
let b = 20;
[a, b] = [b, a];
console.log(a, b);
//
let obj = {
  one: "one",
  two: "two",
  three: "three",
  name: "gia"
};
// let one1=obj.one;
// let two1=obj.two;
// let three1=obj.three;
let { name: myName, one, two, three } = obj;
// console.log(one, two, three,name)
console.log(one, two, three, myName);
