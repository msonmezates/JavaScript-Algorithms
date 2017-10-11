/* Write a function that takes number as an argument and return all prime
numbers up to number in an array */

sieveOfEratosthenes = num => {
  let arr = [];

  for(let i=0; i<num; i++) {
    arr.push(i);
  }

  arr = arr.filter(num => {
    return (num%2 !== 0 && num%3 !== 0)
  });
  return arr;
}

sieveOfEratosthenes(20); //returns [2,3,5,7,11,13,17,19]
