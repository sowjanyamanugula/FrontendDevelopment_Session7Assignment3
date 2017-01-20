/*var add=(function(){
     var counter=0;
     return function()
     {
        console.log(counter+=1);
     }
})();
function counter(){
   console.log(add());
}*/


/*function counter()
{
    var counter=0;
     return function()
     {
        
         console.log( counter += 1);
     }
}
var count=counter();*/


function counter(count)
{
    
     return function()
     {
        
         console.log( count += 1);
     }
}
var count=counter(1);