/* Write a function that takes number as an argument and return all prime
numbers up to number in an array */

sieveOfEratosthenes = num => {
  let primes = [];
  for(let i=0; i<=num; i++) {
    primes[i] = true;         //set each array element to true;
  }

  primes[0] = false;
  primes[1] = false;

  for(let i=2; i <= Math.sqrt(num); i++) { // outer loop provides optimization so that we don't
    console.log('Outer loop, i: ', i);      // have to loop through each number in the array
    for(let j=2; j*i <= num; j++ ) {
      console.log('inner loop j*i is: ', j*i);
      primes[i*j] = false;    //automatically sets to false for nonprime numbers
    }
  }

  let result = [];
  for(let i=0; i<primes.length; i++) {
    console.log('primes[i] is: ', primes[i]); //check true/false condition
    if(primes[i]) result.push(i);
  }
  return result;
}

sieveOfEratosthenes(20); //returns [2,3,5,7,11,13,17,19]
