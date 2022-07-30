const loadElement = document.getElementById('loader')
const items = document.getElementById('items')
const xhr = new XMLHttpRequest();

const timeout = setInterval(() => {
    const storageValute = JSON.parse(localStorage.getItem("valute"))
    if (storageValute) {
        loadElement.classList.remove('loader_active')
        Object.keys(storageValute).forEach(key => {
            items.innerHTML += `
                <div class="item__code">
                    ${storageValute[key].CharCode}
                </div>
                <div class="item__value">
                    ${storageValute[key].Value}
                </div>
                <div class="item__currency">
                    ${storageValute[key].Name}
                </div>
            `
        })
        clearInterval(timeout)
    }
}, 100)

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com')

xhr.addEventListener('readystatechange', (e) => {
    if (xhr.readyState === xhr.DONE) {
        const response =  JSON.parse(xhr.responseText)
        const valute = response.response.Valute
        localStorage.setItem("valute", JSON.stringify(valute))
    }
})

xhr.send()