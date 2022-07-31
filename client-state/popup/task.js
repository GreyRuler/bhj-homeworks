const modal = document.querySelector('.modal')
const modalClose = document.querySelector('.modal__close')
const CLOSE_POPUP_KEY = 'close_popup'

function getCookie(name) {
    const matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([.$?*|{}()\[\]\\\/+^])/g, '\\$1') + "=([^;]*)"
    ))
    return matches ? decodeURIComponent(matches[1]) : undefined
}

console.log(document.cookie)

if (!getCookie(CLOSE_POPUP_KEY)) {
    modal.classList.add('modal_active')
}

modalClose.addEventListener('click', () => {
    modal.classList.remove('modal_active')
    console.log(CLOSE_POPUP_KEY + "=" + "true")
    document.cookie = CLOSE_POPUP_KEY + "=" + "true"
})
