/* Write a function that takes an array of numbers that are sorted and a
number and returns true if the number exists */

binarySearch = (numArray, key) => {
  let midIndex = Math.floor(numArray.length/2);
  let midEl = numArray[midIndex];

  if (midEl === key) return true; //base case
  else if (midEl < key && numArray.length > 1) {
    return binarySearch(numArray.splice(midIndex), key); //use only the second half of array
  } else if (midEl > key && numArray.length > 1) {
    return binarySearch(numArray.splice(0,midIndex), key) //use only the first half of array
  } else return false;
}

binarySearch([1,2,3,4,5,6,7,8,9,10],9); //testing
