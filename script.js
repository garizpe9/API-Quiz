//dom variables
var timeKeep = document.getElementById("Timekeep");
var start = document.getElementById("Start");
var startScreen = document.getElementById("startScreen");
// var one = document.getElementById("one");
// var two = document.getElementById("two");
// var three = document.getElementById("three");
// var four = document.getElementById("four");
// var five = document.getElementById("five");
// var right1 = document.getElementById("right1");
// var wrong1 = document.getElementById("wrong1");
var quiz= document.getElementById("Quiz");
var done = document.getElementById ("done");
// var right2 = document.getElementById("right2");
// var wrong2 = document.getElementById("wrong2");
// var right3 = document.getElementById("right3");
// var wrong3 = document.getElementById("wrong3");
// var right4 = document.getElementById("right4");
// var wrong4 = document.getElementById("wrong4");
// var right5 = document.getElementById("right5");
// var wrong5 = document.getElementById("wrong5");
var nameel = document.getElementById("options");
var score = document.getElementById("score");
var seescores = document.getElementById("seescores");
var questionsArea = document.querySelector("#questions-space");
var elementsArea = document.querySelector("#answers-space");
var questionsArea = document.querySelector("#questions-space");
var Read;
var count = 80
var time = document.getElementById("time");
var number = 0


//buttons

//questions layout

var questions = [
    {
        question: "Question 1",
        answers: [ 
            {
                text: "A",
                isCorrect: false
            },
            {
                text: "B",
                isCorrect: true
            },
            {
                text: "C",
                isCorrect: false
            },
            {
                text: "D",
                isCorrect: false
            }
        ]
    },
    {
        question: "Question 2",
        answers: [ 
            {
                text: "Y",
                isCorrect: false
            },
            {
                text: "Z",
                isCorrect: true
            },
            {
                text: "X",
                isCorrect: false
            },
            {
                text: "P",
                isCorrect: false
            }
        ]
    }
]

//question loop

function okay(){ 
    for(i = 0; i < questions[number].answers.length; i++){
        elementsArea.removeChild(elementsArea.childNodes[0]);
        elementsArea.removeChild(elementsArea.childNodes[0]);
    }

    number++                   
    alert(number);
    questionsArea.removeChild(questionsArea.childNodes[0]);
    startGame()

}   

function startGame(){

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
        abutton.addEventListener("click", okay);

            // //var answer = document.createElement("p");
            // answer.addEventListener("click", function(){
            //     if(!questionElement.answers[i].isCorrect){
            //         seconds -= 10;
            //         alert("Incorrect")
            //     }
            //     else{
            //         alert("Correct")
            //     }
            //     number++;
            // })
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

function timesout(){
    setTimeout(function(){
    response("response","Hello")
    }, .5);
    setTimeout(function(){
    console.log 
    ("Erase");
    }, 2000);
}

// //button functions
function closestart() {
    startScreen.style.display = "none";
    one.style.display ="block";
    Timeper();
}
// function nextclick1() {
//     one.style.display = "none";
//     two.style.display = "block";
     
// }
// function nextclick2() {
//     two.style.display = "none";
//     three.style.display = "block";
    
// }
// function nextclick3() {
//     three.style.display = "none";
//     four.style.display = "block";
    
// }
// function nextclick4() {
//     four.style.display = "none";
//     five.style.display = "block";
    
// }
// function nextclick5() {
//     five.style.display = "none";
//     done.style.display = "block";
//     Timestop()
// }

// //On Click
start.addEventListener("click", closestart)

// right1.addEventListener("click", nextclick1)
// wrong1.addEventListener("click", nextclick1)
// right2.addEventListener("click", nextclick2)
// wrong2.addEventListener("click", nextclick2)
// right3.addEventListener("click", nextclick3)
// wrong3.addEventListener("click", nextclick3)
// right4.addEventListener("click", nextclick4)
// wrong4.addEventListener("click", nextclick4)
// right5.addEventListener("click", nextclick5)
// wrong5.addEventListener("click", nextclick5)

// // look at this for breveity:
// // listEl.addEventListener("click", function(event) {
// //     event.preventDefault();
// //     if(event.target.matches("button")) {
// //       var item = document.createElement("div");
// //       item.textContent = groceries[event.target.parentElement.id];
// //       shoppingCartEl.append(item);
// //     }
// //   });
function displayMessage(type, message) {
    score.textContent = message;
    score.setAttribute("class", type);
}

//local storage
nameel.addEventListener("click", function(event){
    event.preventDefault();
    var nameels = document.getElementById("nameInput").value;
    if (nameels === "") {
        displayMessage("error", "Initials cannot be blank");
        }
    else 
        localStorage.setItem("Initials", nameels);
        done.style.display = "none";
        seescores.style.display = "block";

});
