/* Write a function that takes in array of prices as a parameter and
returns the max possible profit of the day */

maxStockProfit = pricesArr => {
  let maxProfit = -1;
  let buyPrice = 0;
  let sellPrice = 0;

  let changeBuyPrice = true; //this variable evaluates whether we should stop loop or not

  for(let i=0; i<pricesArr.length; i++) {
    if(changeBuyPrice) buyPrice = pricesArr[i];
    sellPrice = pricesArr[i+1];

    if(sellPrice < buyPrice) {
      changeBuyPrice = true; //we want to make profit so we need to keep looping
    } else {
      let tempProfit = sellPrice - buyPrice;
      if(tempProfit > maxProfit) maxProfit = tempProfit;
      changeBuyPrice = false;
    }
  }
  return maxProfit;
}

//testing
maxStockProfit([32,46,26,38,40,48,42]); //result = 22

/* An easy way to solve in an interview if O(n) linear-runtime is not specified

maxStockProfit = pricesArr => {
  pricesArr.sort((a,b) => a-b);

  let minEl = pricesArr.shift();
  let maxEl = pricesArr.pop();
  let profit = maxEl - minEl;
  if(profit < 0) return -1;

  return profit;
}

maxStockProfit([32,46,26,38,40,48,42]); //result = 22

*/
