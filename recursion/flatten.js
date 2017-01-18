/*
Implement a function that flattens a nested array.

flatten([1,[2],[3, [[4]]]]);
=> [1,2,3,4]
*/

const flatten = arr => {
  let result = []

  arr.forEach(item => {
    Array.isArray(item) ?
      result = result.concat(flatten(item)) :
      result.push(item)
  })

  return result
}

console.log(flatten([1,[2],[3, [[4]], [[[[[[[[[[5]], [[[[6]]]]]]]]]]]]]]))
