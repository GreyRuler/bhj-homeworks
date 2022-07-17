// Задание 1
/*
const timer = document.getElementById("timer");

const decrementTimer = function() {
    timer.textContent -= 1;
    if (timer.textContent == 0) {
        alert("Вы победили в конкурсе!");
        clearInterval(intervalId);
    }
}
const intervalId = setInterval(decrementTimer, 1000);
*/

// Задание 3
/*
const timer = document.getElementById("timer");
let mill = 162000000;

const decrementTimer = function() {
    mill -= 1000;
    timer.textContent = new Date(mill).toLocaleTimeString();
    
    if (timer.textContent == '00:00:00') {
        alert("Вы победили в конкурсе!");
        clearInterval(intervalId);
    }
}
const intervalId = setInterval(decrementTimer, 1000);
*/

// Задание 3

const timer = document.getElementById("timer");
const urlDownload = "https://drive.google.com/uc?export=download&id=15jO8A03Dj0cHcPCfIJBNDpar0PFViErK"

const decrementTimer = function() {
    timer.textContent -= 1;
    if (timer.textContent == 0) {
        window.location = urlDownload;
        clearInterval(intervalId);
    }
}
const intervalId = setInterval(decrementTimer, 1000);

