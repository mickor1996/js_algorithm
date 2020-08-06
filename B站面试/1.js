let person = {
  name: 'aaa',
  age: 18
}
person[Symbol.iterator] = function () {

}
for (let i of person) {
  console.log(i)  // aaa 18
}