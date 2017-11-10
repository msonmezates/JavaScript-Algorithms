/* Write a function that takes a string and return true if the string is a
palindrome e.g. 'madam' */

isPalindrome = str => {
  str = str.toLowerCase();
  let charactersArr = str.split(''); //switch characters to an array
  let validCharactersArr = 'abcdefghijklmnopqrstuvwxyz'.split(''); //array of valid characters

  let lettersArr = [];
  charactersArr.forEach(char => {
    if(validCharactersArr.indexOf(char) > -1) lettersArr.push(char); //if a characters exists, push it to new array
  });
  if (lettersArr.join('') === lettersArr.reverse().join('')) return true;
  else return false;
}


//Another way to solve is using map and includes methods

isPalindrome = str => {
  str = str.toLowerCase();
  let strArr = str.split('');
  let charactersArr = 'abcdefghijklmnopqrstuvwxyz'.split('');

  let newArr = [];
  strArr.map(char => {
    if(charactersArr.includes(char)) newArr.push(char);

  });
  if(newArr.join('') === newArr.reverse().join('')) return true;
    else return false;
}

isPalindrome("Madam I'm Adam");

//Another way to solve for a word
isPalindrome = str => {
  var i, len = str.length;
  for(i =0; i<len/2; i++){
    if (str[i]!== str[len -1 -i])
       return false;
  }
  return true;
}

isPalindrome('madam'); //true
isPalindrome("Madam I'm Adam"); //false bc of '
