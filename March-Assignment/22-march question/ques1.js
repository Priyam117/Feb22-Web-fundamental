// create a function which takes an array of marks as input and returns the average of the 
// numbers.
// Also, console log the Grade according to the average
 var array= [10,40,20,30]
var sum = function(array){
    var total = 0
    for ( var i = 0; i< array.length;i++){
        total= total+array[i];
    }
    return total;
    
}
 var average = function(array){
     var  arraySum= sum(array)

     return arraySum/array.length;
 }
 console.log(average ([10,20,30,40,50]));
