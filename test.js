var oneBtn = document.querySelectorAll("button")[0];
var twoBtn = document.querySelectorAll("button")[1];
var reset = document.querySelectorAll("button")[2];
var inputNumber = document.querySelector("input");
var count = document.querySelector("h3 span");
var playerOne = document.querySelector(".PlayerOne");
var playerTwo = document.querySelector(".PlayerTwo");
var p1score = 0;
var p2score = 0;
var gameOver = false;
var winningScore = 5;
// var inputValue = document.getElementById("#input").value;


oneBtn.addEventListener("click", function(){
    if(!gameOver){
    p1score++;
    playerOne.innerHTML = p1score;
        if(p1score === winningScore){
             gameOver = !gameOver;
             playerOne.classList.add("winner");
    }
    }   
});

twoBtn.addEventListener("click", function(){
    if(!gameOver){
    p2score++;
    playerTwo.innerHTML = p2score;
        if(p2score === winningScore){
            gameOver = !gameOver;
            playerTwo.classList.add("winner");
        }
    }
});

reset.addEventListener("click", function(){
    resetAll();
});

function resetAll(){
    p1score = 0;
    playerOne.innerHTML = p1score;
    p2score = 0;
    playerTwo.innerHTML = p2score;
    gameOver = false;
    playerOne.classList.remove("winner");
    playerTwo.classList.remove("winner");
}

inputNumber.addEventListener("change", function(){
    count.innerHTML = inputNumber.value;
    winningScore = Number(inputNumber.value);
    resetAll();
});

