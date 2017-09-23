/* write a function that takes a number which should print 'Fizz' if it's
divisible by 3, 'Buzz' if it's divisible by 5, 'FizzBuzz' if it is divisible by
15 and number itself otherwise.*/

fizzBuzz = num => {
  for(let x=1; x<=num; x++) {
    if(x % 15 === 0) console.log('FizzBuzz');
     else if (x % 3 === 0) console.log('Fizz');
      else if (x % 5 === 0) console.log('Buzz');
        else console.log(x);

  }
}

fizzBuzz(20); //test
