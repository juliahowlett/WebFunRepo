//Range print
//Create a function that can take a start point, end point,
//and skip amount, to print all numbers in the range.

function rangePrint(start, end, skip){

for(var i = start; i<end; i++){
    console.log(i)
    i = start + skip
  }
}

rangePrint(2, 10, 2);
