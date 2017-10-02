/* write a function that takes an array as an argument and return mean,median
and mode in an object */

mean = arr => {
  let newNumber = 0;
  arr.map(num => newNumber += num);
  return newNumber/arr.length;
}

median = arr => {
  for(let i=0; i<arr.length; i++) {
    let newNumber = arr[i];
    if(arr[i]>arr[i+1]) {
      arr[i] = arr[i+1];
      arr[i+1] = newNumber;
    }
  }
  return arr;
}

meanMedianMode = arr => {
 return median(arr); //[1,1,2,3,4]
}

meanMedianMode([3,1,1,2,4]);
