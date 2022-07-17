const modalMain = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');

modalMain.className = "modal modal_active";

const btnDanger = document.querySelector('.btn_danger')
btnDanger.onclick = () => {
    modalMain.className = "modal";
    modalSuccess.className = "modal modal_active";
}

const buttonClose = [...document.querySelectorAll('.modal__close_times')];
buttonClose.forEach(item =>
    item.onclick = () => {
        modalMain.className = "modal";
        modalSuccess.className = "modal";
    }
)