// Write a function that will  make an array print like:
//
// 0 -> James
// 1 -> Jill
// 2 -> Jane
// 3 -> Jack

function fancyArray(){

   for(var i = 0; i <= fancyArray.length; i++){

     console.log(fancyArray[i])
  }
}

var names_arr = [ "James", "Jill", "Jane", "Jack" ];

fancyArray(names_arr);
