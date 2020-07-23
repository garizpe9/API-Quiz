//dom variables
var timeKeep = document.getElementById("Timekeep");

//Timer
console.log(timeKeep.childNodes[0]);

function Timeper(){
    var count = 80
    var Read = setInterval(function(){
        console.log(count);
        timeKeep.textContent = "Time: " + count;
        count --;
        if (count<0){
            clearInterval(Read);
        }
    }, 1000);
}
Timeper()