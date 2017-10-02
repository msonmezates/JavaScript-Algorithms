/* write a function that takes an array as an argument and return mean,median
and mode in an object */

mean = arr => {
  let newNumber = 0;
  for(let i=0; i<arr.length; i++) {
    newNumber += arr[i];
  }
  return newNumber/arr.length;
}

meanMedianMode = arr => {
 return median(arr);
}

meanMedianMode([3,1,1,2,4]); //11
