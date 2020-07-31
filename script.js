//dom variables
var timeKeep = document.getElementById("Timekeep");
var start = document.getElementById("Start");
var startScreen = document.getElementById("startScreen");
var quiz= document.getElementById("Quiz");
var done = document.getElementById ("done");
var score = document.getElementById ("score");
var one = document.getElementById ("one");
var nameel = document.getElementById("options");
var score = document.getElementById("score");
var scores = document.getElementById("scorecard");
var clear = document.getElementById("Clear");
var seescores = document.getElementById("seescores");
var questionsArea = document.querySelector("#questions-space");
var elementsArea = document.querySelector("#answers-space");
var questionsArea = document.querySelector("#questions-space");
var highscore = document.querySelector("a");
var header = document.getElementById("header");
var Read;
var count = 80
var time = document.getElementById("time");
var number = 0
var retake = document.getElementById("Retake");
var body = document.querySelector("body");

//questions layout

var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        answers: [ 
            {
                text: "1. strings",
                isCorrect: false
            },
            {
                text: "2. booleans",
                isCorrect: false
            },
            {
                text: "3. alerts",
                isCorrect: false
            },
            {
                text: "4. numbers",
                isCorrect: true
            }
        ]
    },
    {
        question: "The condition in an if/else statement is enclosed is enclosed within ___",
        answers: [ 
            {
                text: "1. quotes",
                isCorrect: false
            },
            {
                text: "2. curly brackets",
                isCorrect: false
            },
            {
                text: "3. parentheses",
                isCorrect: true
            },
            {
                text: "4. square brackets",
                isCorrect: false
            }

            
        ]
    },
    {
        question: "Arrays in JavaScript can be used to store:",
        answers: [ 
            {
                text: "1. numbers and strings ",
                isCorrect: false
            },
            {
                text: "2. other arrays",
                isCorrect: false
            },
            {
                text: "3. booleans",
                isCorrect: false
            },
            {
                text: "4. all of the above",
                isCorrect: true
            }

            
        ]
    },
    {
        question: "String values must be enclosed within ___ when being assigned to variables. ",
        answers: [ 
            {
                text: "1.commas",
                isCorrect: false
            },
            {
                text: "2. curly brackets",
                isCorrect: true
            },
            {
                text: "3. quotes",
                isCorrect: false
            },
            {
                text: "4. prantheses",
                isCorrect: false
            }

            
        ]
    },
    {
        question: "A very usefule tool used during development and debugging for printing content to the debuger is: ",
        answers: [ 
            {
                text: "1. JavaScript",
                isCorrect: false
            },
            {
                text: "2. terminal/bash",
                isCorrect: false
            },
            {
                text: "3. for loops",
                isCorrect: false
            },
            {
                text: "4. console.log",
                isCorrect: true
            }

            
        ]
    }
]

//question loop

function okay(){ //remove children
    //console.log()
    for(i = 0; i < questions[number].answers.length; i++){
        elementsArea.removeChild(elementsArea.childNodes[0]);
        elementsArea.removeChild(elementsArea.childNodes[0]);
    }
    number++;      
    if (number<questions.length){   
        questionsArea.removeChild(questionsArea.childNodes[0]);
        startGame()
    }
    else 
        nextclick5();
}   

function startGame(){ //create questions answers
    var questionno = document.createElement ("h1"); 
    questionno.textContent = questions[number].question;
    questionsArea.appendChild(questionno);
    playgame();
}

function playgame(){
    for(i = 0; i < questions[number].answers.length; i++) { //loop questions

        var abutton = document.createElement("button"); //creates button format
        var breakline = document.createElement ("ul") //format
        varanswerElement = questions[number].answers[i].text; //pulling object for button from array
        abutton.textContent = varanswerElement; //placing object text
        elementsArea.appendChild(abutton); //repeats
        elementsArea.appendChild(breakline); //repeats
        abutton.addEventListener("click", okay)
            
            // if (questions[number].answers[i].isCorrect !==true){
            //     count -10;
            //     console.log("cool")
            //     okay()  
            // }    
            // else 
            //  okay()
    }     

}
startGame()

//Timer
function Timeper(){
    Read = setInterval(function(){
        //console.log(count);
        timeKeep.textContent = "Time: " + count;
        count --;
        if (count<0){
            clearInterval(Read);
        }
    }, 1000);
}

function Timestop(){
    clearInterval(Read)
    time.textContent = count   
}

// function timesout(){
    
//     setTimeout(function(){
//     response("response","Hello")
//     }, .5);
//     setTimeout(function(){
//     console.log 
//     ("Erase");
//     }, 2000);
// }

// //button functions

function closestart() {
    startScreen.style.display = "none";
    one.style.display ="block";
    Timeper();
}

//fucntion clicks }
function nextclick5() {
    one.style.display = "none";
    done.style.display = "block";
    Timestop()
}

function redo() { ///restart game
    seescores.style.display = "none";
    startScreen.style.display = "block";
    header.style.display = "block";
    questionsArea.removeChild(questionsArea.childNodes[0]);
    number=0;
    count=80;
    startGame()
}

function shoops(){ //format
    questionsArea.removeChild(questionsArea.childNodes[0]);
    startScreen.style.display = "none";
    seescores.style.display = "block";
    done.style.display = "none";
    one.style.display = "none";
    var email = localStorage.getItem("Initials");
    var password = localStorage.getItem("Time");  
    scores.textContent = email + " : " + password  
   
}

// //On Click
start.addEventListener("click", closestart)
retake.addEventListener("click", redo)
highscore.addEventListener("click", shoops)
clear.addEventListener("click", remove)


//local storage
function displayMessage(type, message) {
    score.textContent = message;
    score.setAttribute("class", type);
}

nameel.addEventListener("click", function(event){
    event.preventDefault();
    var nameels = document.getElementById("nameInput").value;
    if (nameels !== "") {
        localStorage.setItem("Initials", nameels);
        localStorage.setItem("Time", time.textContent)
        done.style.display = "none"; 
        seescores.style.display = "block";
        header.style.display = "none"
        renderLastRegistered()
    }   
    else (nameels !== "")
        displayMessage("score", "Initials cannot be blank");          
    
})

function renderLastRegistered() {
    var email = localStorage.getItem("Initials");
    var password = localStorage.getItem("Time");  
    scores.textContent = email + " : " + password   
}

function remove() {
    var email = localStorage.getItem("Initials");
    var password = localStorage.getItem("Time");
    localStorage.removeItem("Initials");
    localStorage.removeItem("Time");  
    scores.removeChild(scores.childNodes[0]);
}