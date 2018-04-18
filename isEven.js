
function isEven(x) {
  var bool;
  if(x %2 === 0) {
    bool = true;
  } else if(x %2 > 0) {
    bool = false;
  } else {
    bool = "??"
  }
  return bool;
}


console.log(isEven(-369))
