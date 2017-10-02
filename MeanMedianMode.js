/* write a function that takes an array as an argument and return mean,median
and mode in an object */

meanMedianMode = arr => {
 return {
   mean: mean(arr),
   median: median(arr)
 };
}

mean = arr => {
  let newNumber = 0;
  arr.map(num => newNumber += num);
  return newNumber/arr.length;
}

median = arr => {
  arr.sort((a,b) => a-b);
  let median = 0;
  if(arr.length % 2 === 1) median = arr[Math.floor(arr.length/2)];
  else median = (arr[arr.length/2] + arr[(arr.length/2)-1]) / 2;
  return median;
}

meanMedianMode([3,1,1,2,4]);
