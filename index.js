
function theBeatlesPlay(musicians, instruments){
  var array = [];
  for(var i= 0; i< musicians.length; i++){
    array.push(musicians[i] + " plays " + instruments[i]);
  }
  return array;
}

function johnLennonFacts(facts){
  var array= [];
  var i= 0;
  while(i<facts.length){
    array.push(facts[1]+ '!!!');
    i++;
  }
  return array;
}

function iLoveTheBeatles(num){
  var arr = [];
  do{
    arr.push('I love the Beatles!');
    num++;
  } while(num<15);
  return arr;
}
