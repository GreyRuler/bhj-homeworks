const count = document.getElementById("clicker__counter");
const speed = document.getElementById("clicker__speed");
const cookie = document.getElementById("cookie");
let date1 = Date.now();

cookie.onclick = function() {
    let countCookie = Number.parseInt(count.textContent);
    if (countCookie % 2 === 0) {
        cookie.width = 150;
        count.textContent = Number.parseInt(count.textContent) + 1;
    } else {
        cookie.width = 200;
        count.textContent = Number.parseInt(count.textContent) + 1;
    }
    let date2 = Date.now()
    speed.textContent = (1 / (date2 - date1) * 1000).toFixed(2);
    date1 = date2;
}
