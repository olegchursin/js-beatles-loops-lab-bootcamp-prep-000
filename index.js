const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments){

  var beatlesPlayArray = [];

  for (var i = 0; i < musicians.length; i++){
    beatlesPlayArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return beatlesPlayArray;
}

function johnLennonFacts(facts) {
  const factsArray = [];
  let i = 0
  while (i < facts.length) {
    factsArray.push(`${facts[i]}!!!`)
    i++
  }
  return factsArray;
}
