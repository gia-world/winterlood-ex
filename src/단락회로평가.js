const getName = (person) => {
  // if(!person){
  //   return "객체가 아님"
  // }
  // return person.name
  const name = person && person.name;
  // person=undefined-> falsy , 단락회로 평가로 name은 undefined를 반환
  return name || "객체가 아님";
  // name->falsy, 두번째 피연산자로 넘어가서 반환
};

let person;
const name = getName(person);
console.log(name);
console.log(person);
