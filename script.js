// 'use strict';

// // console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = `hello All have some 🍕🍟`;

// // console.log(document.querySelector('.check').value);

// document.querySelector('.number').textContent = 10;

// document.querySelector('.score').textContent = 13;

// document.querySelector('.guess').value = 23;

let secretNumber = Math.trunc(Math.random()*20)+1;
let querycustom = document.querySelector.bind(document);
let totalScore = document.querySelector('.score').innerText;
let highestScore = document.querySelector('.highscore').textContent;

console.warn(secretNumber);

document.querySelector('.check').addEventListener('click', function(){

    let inputtedValue = Number(document.querySelector('.guess').value);


    if(!inputtedValue){
        document.querySelector('.message').innerText = "NO number ⛔";
    } else if(secretNumber === inputtedValue){
        if(totalScore > 1){
        document.querySelector('.message').innerText = "Correct choice ✅";
        }

        document.querySelector('.number').textContent = secretNumber;

        if(highestScore < totalScore){
            highestScore = totalScore;
            document.querySelector('.highscore').textContent = highestScore;
        }

    } else if ( inputtedValue > secretNumber ){

        if(totalScore > 1){
        document.querySelector('.message').innerText = "Guess is too high 📈";
        totalScore = totalScore - 1;
        document.querySelector('.score').innerText = totalScore;
        } else {
            document.querySelector('.message').innerText = "You lost the game 👎";
        }
    } else if (inputtedValue < secretNumber){
        if(totalScore > 1 ){
        document.querySelector('.message').innerText = "Guess is too low 📉";
        totalScore = totalScore - 1;
        document.querySelector('.score').innerText = totalScore;
        } else {
            document.querySelector('.message').innerText = "You lost the game 👎";
        }
    }


    // console.log(document.querySelector('.message').textContent);
})