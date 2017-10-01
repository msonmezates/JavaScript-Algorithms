// write a function that takes an array as an argument and return reversed array.
// Do not use reverse() method!
// Do not create a new array and push into it!

reverseArrayInPlace = arr => {
  console.log(arr.length/2);
  for(let i=0; i<arr.length/2; i++) {
    let newElement = arr[i];  //assign the first element to newElement
    arr[i] = arr[arr.length-1-i]; //swap the elements between first and last elements
    arr[arr.length-1-i] = newElement; //assign the first element as last element
  }
  return arr;
};

reverseArrayInPlace([1,2,3,4,5]); //[5,4,3,2,1]
