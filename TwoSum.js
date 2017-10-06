/* Write a function that takes array of numbers and a number,sum, and return
every pair of numbers from the array that adds up to the sum */

twoSum = (arr, sum) => {
  let pairs = [];
  let hashtable = [];

  arr.map(num => {
    let currentNum = num;
    let counterPart = sum - currentNum;
    console.log(counterPart);
    if (hashtable.indexOf(counterPart) !== -1) { //if counterPart exists
      pairs.push([currentNum, counterPart]); //push the array into pairs array
    }
    hashtable.push(currentNum);
  });
  return pairs;
}

twoSum([1,3,1,4,5,6,0], 4);
