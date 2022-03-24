// write a function which takes an array as input and returns the maximum number from an array of 5 elements.

 var c=   function findMax(arr){
    max = arr[0]
  
   for (var element of arr  ){
       if ( element > max)
  max=element
    }
    console.log( max);
}
c([3,18,7,42,-15,84]);