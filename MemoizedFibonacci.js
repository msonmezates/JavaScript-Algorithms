/* Write a Fibonacci function that takes a number(index) an array as an argument
and return the position of the index  */

fibMemo = (index, cache) => {
  cache = cache || [];

  if(cache[index]) return cache[index];
  else {
    if(index < 3) return 1;
    else cache[index] = fibMemo(index-1, cache) + fibMemo(index-2, cache);
  }

  return cache[index];
}

//testing
fibMemo(15); //return 610
