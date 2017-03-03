
function makeMenCounter() {
  var count = 0;

  function counter() {//existing functionlity wrapped into its own function
    count += 1;
    return count + ' men';
  }

  return counter; // this forms the closure
}

function makeWomenCounter() {
  var count = 0;

  function counter() {
    count += 1;
    return count + ' women';
  }

  return counter;
}