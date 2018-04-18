var count = 0;

function countBirds() {
  count += 1;
  return count + ' birds'
}

function countDogs() {
  count += 1;
  return count + ' dogs'
}

function dogHouse() {
  var dogs = 8;
  function showDogs() {
    return dogs;
  }
  return showDogs;
}


var getDogs = dogHouse();

console.log(getDogs());
