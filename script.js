//dom variables
var timeKeep = document.getElementById("Timekeep");
var start = document.getElementById("Start");
var startScreen = document.getElementById("startScreen");
var one = document.getElementById("one");
var right = document.getElementById("right");
var wrong = document.getElementById("wrong");

//Timer
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

//Start Screen Next Question
function closestart() {
    startScreen.style.display = "none";
    one.style.display ="block";
    Timeper();
}

//On Click
start.addEventListener("click", closestart);