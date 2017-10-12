/* Write a function that takes an array and returns sorted number of arrays
by using bubble sort algorithm */

bubbleSort = arr => {
  for(let i=arr.length; i>0; i--) {
    for(let j=0; j<i; j++) {
      if(arr[j] > arr[j+1]) {
        let tempVar = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = tempVar;
      }
    }
  }
  return arr;
 }

//testing
bubbleSort([5,2,3,1,6,4,3,1,0,-9]); //return [ -9, 0, 1, 1, 2, 3, 3, 4, 5, 6 ]
