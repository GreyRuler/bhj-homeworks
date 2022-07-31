const textarea = document.querySelector('textarea')
const button = document.querySelector('button')
const key = 'textarea'

textarea.value = localStorage.getItem(key)

textarea.addEventListener('change', () => {
    localStorage.setItem(key, textarea.value)
})

button.addEventListener('click', () => {
    textarea.value = ""
    localStorage.setItem(key, textarea.value)
})