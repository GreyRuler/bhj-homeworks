const count = document.getElementById("clicker__counter");
const speed = document.getElementById("clicker__speed");
const cookie = document.getElementById("cookie");
let date1 = Date.now();

cookie.onclick = function() {
    cookie.width = ++count.textContent % 2 ? 250 : 200;
    let date2 = Date.now()
    speed.textContent = (1 / (date2 - date1) * 1000).toFixed(2);
    date1 = date2;
}
