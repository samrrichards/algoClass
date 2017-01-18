/*
Implement a function that will reverse a string recursively.

reverse('abcdefg')
=> 'gfedcba'
*/

const reverse = str => str.length === 0 ?
  '' : str[str.length - 1] + reverse(str.substr(0, str.length -1));

console.log(reverse('supercalifragalisticexpialidocious!'))
console.log(reverse('a man a plan a canal panama'))
