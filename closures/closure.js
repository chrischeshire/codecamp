var men = 3;

function countPeople() { //outer function
  var women = 7;

  function show_Women(){ //inner function
    console.log(women);
  }

  return show_Women;
}

var getWomen = countPeople();

getWomen();