var count = 0;

function countBirds() {
  count += 1;
  return count + ' birds';
}

//Sharing the same count variable introduces a bug
function countDogs() {
  count += 1;
  return count + ' dogs';
}