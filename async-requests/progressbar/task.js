const progress = document.querySelector('progress')
const form = document.querySelector('form')
const button = document.getElementById('send')

form.addEventListener('submit', (e) => {
    const formData = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open('POST', form.getAttribute('action'), true)
    xhr.addEventListener("progress", (e) => {
        // if (e.lengthComputable) {
        //     console.log(e.loaded / e.total)
        // }
        // console.log(e.loaded)
        console.log((e.loaded / e.total) * 100) // Infinity
    })
    xhr.addEventListener('readystatechange', () => {
        console.log(xhr)
        // progress.value += 0.7
    })
    xhr.send(formData)
    e.preventDefault()
})