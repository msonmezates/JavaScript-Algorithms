/* write a function that takes an array as an argument and return mean,median
and mode in an object */

meanMedianMode = arr => {
 return {
   mean: mean(arr),
   median: median(arr),
   mode: mode(arr),
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
  (arr.length % 2 === 1) ? (median = arr[Math.floor(arr.length/2)]) : (median = (arr[arr.length/2] + arr[(arr.length/2)-1]) / 2);
  return median;
}

mode = arr => {
  let modeObj = {};
  arr.map(num => {
    if(!modeObj[num]) modeObj[num] = 0;
    modeObj[num]++;
  });

  let maxFrequency = 0; //how often the current mode shows up
  let modeArr = [];
  for(let num in modeObj) {
    if(modeObj[num] > maxFrequency) {
      modeArr = [num];
      maxFrequency = modeObj[num];
    } else if (modeObj[num] === maxFrequency) modeArr.push(num);
  }
  // if every value appears same amount of times
  if (modes.length === Object.keys(modeObj).length) modes = [];
  return modes;
}

meanMedianMode([3,1,1,2,4]);
