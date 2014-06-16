// fib sequence
// start with 1, second is 1
// make an array of the sequence
// sequence -- 2 previous numbers makes up the next one

function fibIt(indexOfNumber) {
  var fibStart = [1, 1];
  for(var i = 2; i <= indexOfNumber; i++){
    fibStart.push(fibStart[i - 2] + fibStart[i - 1]);
  }
  console.log( fibStart[indexOfNumber], fibStart );
}

// recursive without an array

function fibItRec(number, indexOfNumber) {
  if (number < 2) {
      return 1;
  } else {
      return fibItRec(number - 2, indexOfNumber + 4) + fibItRec(number - 1, indexOfNumber + 4);
  }
}
