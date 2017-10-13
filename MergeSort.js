/* Write a function that takes an array as an argument and returns a sorted
array by using merge sort method */

mergeSort = arr => {
  if(arr.length < 2) return arr;

  let midIndex = Math.floor(arr.length/2);

  let firstHalf = arr.slice(0, midIndex);
  let secondHalf = arr.slice(midIndex);

  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

merge = (array1, array2) => {
  let result = [];

  while(array1.length && array2.length ) {
    let minEl;
    if(array1[0] < array2[0]) minEl = array1.shift(); //take first element out and assign to minEl
    else minEl = array2.shift();

    result.push(minEl);
  }

  if(array1.length) result = [...result, ...array1];
  else result = [...result, ...array2];

  return result;
}

//testing
mergeSort([6000, 34, 203, 3, 746, 200, 984, 198, 764, 1, 9, 1]);
