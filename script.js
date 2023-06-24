'use strict'
/*
document.querySelector(".message").textContent = "🎉 Correct Number!";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 21;

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
document.querySelector(".score").textContent = score;

const resetToStart = function (){
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".number").textContent = "?";
    document.querySelector("body").style.backgroundColor = "#222";
    displayMessage("Start guessing...");
    document.querySelector(".guess").value = "";
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector(".score").textContent = score;
};


const correctNumberReached = function (){
    displayMessage("🎉 Correct Number!");
    document.querySelector(".score").textContent = score;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
    if (highScore < score)
        {
            highScore = score;
            document.querySelector(".highscore").textContent = highScore;
        }

};

const displayMessage = function(message) {
    document.querySelector(".message").textContent = message;
};


document.querySelector(".again").addEventListener("click", resetToStart);


document.querySelector(".check").addEventListener("click", function () {
   
    const guess = Number(document.querySelector(".guess").value);    
    if (!guess)
    {
        message.textContent = "⛔ No number!";
    }
    else
    {
        if (secretNumber === guess)
        {
            correctNumberReached(); 
        }
        else
        {
            if (score > 1)
            {
                score--;
                document.querySelector(".score").textContent = score;
                displayMessage( guess > secretNumber ?"👆 Too high!": "👇 Too low!");
                           
            }
            else
            {
                displayMessage( "💣 You lost the game!");
                document.querySelector(".score").textContent = 0;
            }
        }
    }
    
});