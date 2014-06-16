// fib sequence
// start with 1, second is 1
// make an array of the sequence
// sequence -- 2 previous numbers makes up the next one

function fibIt(indexOfNumber) {
  var fibStart = [1, 1];

  for(var i = 2; i <= indexOfNumber; i++){
    fibStart.push(fibStart[i - 2] + fibStart[i - 1]);
  }

  return fibStart[indexOfNumber];
}

// recursive without an array

function fibItRec(indexOfNumber) {
  var number = 0;

  if (indexOfNumber < 2) {
    number = 1;
  } else {
    return fibItRec(indexOfNumber - 2) + fibItRec(indexOfNumber - 1);
  }

  return number;
}
