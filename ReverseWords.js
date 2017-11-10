//write a function that takes a string and reverses each word

reverseWords = str => {
  let strArr = str.split(' ');
  let newArr = [];

  strArr.map(word => {
    let newWord = '';
    for(let i=word.length-1; i >= 0; i--) {
      let currentLetter = word[i];
      newWord += currentLetter;
    }
    newArr.push(newWord);
  });
  return newArr.join(' ');
}

reverseWords('this is a JavaScript string');

// alternative solution

reverse = str => {
  let rtnStr = '';
  for(let i = str.length-1; i>=0;i--){
    rtnStr +=str[i];
  }
  return rtnStr;
}
