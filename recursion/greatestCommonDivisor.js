/*
Write a function that takes two numbers and returns the greatest common divisor.
*/

//The naive/iterative solution:
const gcdIter = (a, b) => {
  const larger = Math.max(a, b)
  const smaller = Math.min(a, b)

  let divisor = 1

  if (larger % smaller === 0)
    return smaller;

  for (let i = 2; i <= Math.ceil(smaller/2); i++) {
    if (larger % i == 0)
      if (smaller % i == 0)
        divisor = i
  }

  return divisor
}

//More elegent solution, using Euclid's algorithm:
const gcd = (a, b) => {
  const min = Math.min(a, b)
  const max = Math.max(a, b)
  return max % min === 0 ? min : gcd(min, max % min)
}

console.log(gcd(2, 3)) //1
console.log(gcd(2, 10)) //2
console.log(gcd(15, 35)) //5
console.log(gcd(8, 4)) //4
console.log(gcd(200, 300)) //100
