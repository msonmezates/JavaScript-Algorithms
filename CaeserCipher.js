function caeserCipher(str, num) {
  num = num % 26; //in case if the number is too large e.g. 300!
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
  return newString;
}

caeserCipher('JavaScript',-900); //'TkfkCmbszd'

//Alternative solution with map function

caesarCipher = (str, num) => {
num = num % 26;
let lowerCaseString = str.toLowerCase().split('');
let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
let newStr = '';

lowerCaseString.map((letter,i) => {
  let currentIndex = alphabet.indexOf(letter);
  currentIndex += num;
  if(currentIndex < 0) currentIndex = currentIndex + 26;
  else if(currentIndex > 25) currentIndex = currentIndex - 26;

  letter = alphabet[currentIndex];

  if(str[i] === str[i].toUpperCase()) letter = letter.toUpperCase();

  newStr += letter;
});
return newStr;
}

caesarCipher('JavaScript',-900); //'TkfkCmbszd'
