/* Write a function of Fibonnaci series that takes position as a number and
return that number in the position */

fibonacci = position => {
  if (position < 3) return 1; //base case
  else return fibonacci(position-1) + fibonacci(position-2); //recursive case
}

//Testing
fibonacci(4); //return 3
fibonacci(9); //returns 34

//Alternate solution

fibonacci = n => {
  let fibo = [0, 1];

  if (n <= 2) return 1;

  for (let i = 2; i <=n; i++ ){
   fibo[i] = fibo[i-1]+fibo[i-2];
  }

 return fibo[n];
}

fibonacci(12); //returns 144
