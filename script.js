//dom variables
var timeKeep = document.getElementById("Timekeep");
var start = document.getElementById("Start");
var startScreen = document.getElementById("startScreen");
var one = document.getElementById("one");
var right = document.getElementById("right");
var wrong = document.getElementById("wrong");
var quiz= document.getElementById("Quiz");
var back = document.getElementById ("goBack");
var next = document.getElementById ("nextQuestion");
var done = document.getElementById ("done");

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

function nextclick() {
    one.style.display = "none";
    done.style.display = "block";

}

function backclick() {
    one.style.display = "none";
    startScreen.style.display = "block";
}

//On Click
start.addEventListener("click", closestart)
next.addEventListener("click", nextclick)
back.addEventListener("click", backclick)