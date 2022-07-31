const progress = document.querySelector('progress')
const form = document.querySelector('form')
const button = document.getElementById('send')

form.addEventListener('submit', (e) => {
    const formData = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open('POST', form.getAttribute('action'), true)
    xhr.upload.onprogress = function(event) {
        progress.value =  event.loaded / event.total
    };
    xhr.send(formData)
    e.preventDefault()
})