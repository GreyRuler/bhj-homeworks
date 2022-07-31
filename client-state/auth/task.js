const form = document.querySelector('#signin__form')
const sendButton = document.querySelector('#signin__btn')
const signIn = document.querySelector('#signin')
const welcome = document.querySelector('#welcome')
const userId = document.querySelector('#user_id')
const exitButton = document.querySelector('#exit__btn')
const USER_KEY = 'user'

function getCookie(name) {
    const matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([.$?*|{}()\[\]\\\/+^])/g, '\\$1') + "=([^;]*)"
    ))
    return matches ? decodeURIComponent(matches[1]) : undefined
}

// уcтанавливает cookie
function setCookie(name, value, props) {

    props = props || {}

    var exp = props.expires

    if (typeof exp == "number" && exp) {

        var d = new Date()

        d.setTime(d.getTime() + exp*1000)

        exp = props.expires = d

    }

    if(exp && exp.toUTCString) { props.expires = exp.toUTCString() }

    value = encodeURIComponent(value)

    var updatedCookie = name + "=" + value

    for(var propName in props){

        updatedCookie += "; " + propName

        var propValue = props[propName]

        if(propValue !== true){ updatedCookie += "=" + propValue }
    }

    document.cookie = updatedCookie

}

// удаляет cookie
function deleteCookie(name) {
    setCookie(name, null, { expires: -1 })
}

const welcomeUser = (user_id) => {
    userId.textContent = user_id
    welcome.classList.add('welcome_active')
}

if (getCookie(USER_KEY)) {
    signIn.classList.remove('signin_active')
    welcomeUser(getCookie(USER_KEY))
}

const xhr = new XMLHttpRequest()
xhr.open("POST", form.getAttribute('action'))

xhr.addEventListener('readystatechange', (e) => {
    if (xhr.readyState === xhr.DONE && xhr.status === 200) {
        const response = JSON.parse(xhr.response)
        if (response.success) {
            welcomeUser(response.user_id)
            document.cookie = USER_KEY + "=" + "true"
        } else {
            alert('Неверный логин/пароль')
            signIn.classList.add('signin_active')
        }
    }
})

sendButton.addEventListener('click', (e) => {
    const formData = new FormData(form)
    xhr.send(formData)
    const formFields = [...form.querySelectorAll('.control')]
    console.log(formFields)
    formFields.forEach(element => {
        element.value = ""
    })
    signIn.classList.remove('signin_active')
    e.preventDefault()
})

exitButton.addEventListener('click', (e) => {
    signIn.classList.add('signin_active')
    welcome.classList.remove('welcome_active')
    deleteCookie(USER_KEY)
})