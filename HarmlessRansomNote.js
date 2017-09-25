/* Given an arbitrary ransom note string and another string containing letters
from all the magazines, write a function that will return true if the ransom
note can be constructed from the magazines ; otherwise, it will return false. */

harmlessRansomNote = (noteText, magazineText) => {
  let noteArr = noteText.split(' '); //convert the string into an array
  let magazineArr = magazineText.split(' ');

  let magazineObj = {};

  magazineArr.forEach(word => {

    if (!magazineObj[word]) {
      magazineObj[word] = 0;
    }
    magazineObj[word]++; //increment existing word
  });
  // console.log(magazineObj);

  let noteExist = true;
  noteArr.forEach(word => {
    if(magazineObj[word]) {
      magazineObj[word]--; //decrement existing word
      if(magazineObj < 0) noteExist = false; //return false if it doesn't exist
    }
    else noteExist = false;
  });
  return noteExist;
}

// harmlessRansomNote('this is all','this is all the magazine text in the magazine'); //test
