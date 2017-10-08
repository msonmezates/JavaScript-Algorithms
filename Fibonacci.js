/* Write a function of Fibonnaci series that takes position as a number and
return that number in the position */

fibonacci = position => {
  if (position < 3) return 1; //base case
  else return fibonacci(position-1) + fibonacci(position-2); //recursive case
}

//Testing
fibonacci(4); //return 3
fibonacci(9); //returns 34
