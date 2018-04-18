function countBs(string) {
  let bCount = "";
  for(i = 0; i < string.length; i++) {
    if(string[i] === "B") {
      bCount ++;
    }
  }
  return bCount;
}


console.log(countBs('BBBB'))

function countChar(string, char) {
  let charCount = "";
  string = string.toLowerCase()
  for(i = 0; i < string.length; i++){
    if(string[i] === char) {
      charCount ++;
    }
  }
  return charCount;
}

console.log(countChar("s", "s"))
