const modalMain = document.getElementById('modal_main');

modalMain.className = "modal modal_active";

const button = document.querySelector('.modal__close');
button.onclick = () => {
    modalMain.className = "modal";
}