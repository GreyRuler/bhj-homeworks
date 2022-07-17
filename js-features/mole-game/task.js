const holeGame = document.getElementsByClassName("hole-game");
const dead = document.getElementById("dead");
const lost = document.getElementById("lost");
const children = [...holeGame[0].children];

children.forEach(element => {
    element.onclick = () => {
        if (element.className == 'hole') {
            let lostNumber = Number.parseInt(lost.textContent);
            lost.textContent = lostNumber + 1;
            if (lost.textContent == 5) {
                lost.textContent = 0;
                dead.textContent = 0;
                alert("Вы проиграли!");
            }
        } else {
            let deadNumber = Number.parseInt(dead.textContent);
            dead.textContent = deadNumber + 1;
            if (dead.textContent == 10) {
                lost.textContent = 0;
                dead.textContent = 0;
                alert("Вы выиграли!");
            }
        }
    }
});