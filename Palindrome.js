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
