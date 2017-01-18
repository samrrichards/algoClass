/*
Implement factorial.

factorial(5) => 5*4*3*2*1 => 120
*/

const factorial =
  num => num > 1 ? num * factorial(num - 1) : 1

console.log(factorial(6))
console.log(factorial(5))
console.log(factorial(3))
console.log(factorial(2))
