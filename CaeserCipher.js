/*write a function that takes a string and number such that each letter of a
given text is replaced by a letter some fixed number of positions down the alphabet */

function caeserCipher(str, num) {
  let lowerCaseString = str.toLowerCase();
  let alphabetArray = 'abcdefghijklmnopqrstuvwxyz'.split(''); //alphabet array

  let newString = '';
  for(let i=0; i<lowerCaseString.length; i++) {
    let currentLetter = lowerCaseString[i];
    if(currentLetter === ' ') {
      newString += currentLetter;
      continue; //it means move onto the next iteration of the for loop
    }
    let currentIndex = alphabetArray.indexOf(currentLetter); //find the index of current letter
    let newIndex = currentIndex + num; //this is the new index of our alphabet array

    if(newIndex > 25) newIndex = newIndex - 26; //make sure to stay in index 0(a) and 25(z)
    if(newIndex < 0) newIndex = 26 + newIndex;

    if(str[i] === str[i].toUpperCase()) newString += alphabetArray[newIndex].toUpperCase();
    else newString += alphabetArray[newIndex]; //new string with shifted letters
  }
  console.log(newString);
}

caeserCipher('aB',2); //cD
