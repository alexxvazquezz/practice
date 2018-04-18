// Function that prints out the amount of cows and chickens

function zeroPad(number, width) {
  let string = String(number);
  while(string.length < width) {
    string = "0" + string;
  }

  return string;
}


function printFarmInventory(cows, chickensfd, pigs) {
  console.log(`${zeroPad(cows, 3)} Cows`)
  console.log(`${zeroPad(chickens, 3)} Chickens`)
  console.log(`${zeroPad(pigs, 3)} Pigs`)
}



function returnMin(x, y) {
  let min = Math.min(x, y);
  return min;
}




function isEven(x) {
  var bool = ""
  if(x %2 === 0) {
    bool = true;
  } else if(x %2 > 0) {
    bool = false;
  } else {
    bool = "??"
  }
  return bool;
}

console.log(isEven(-45))
