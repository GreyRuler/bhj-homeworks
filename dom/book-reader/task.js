const controlFontSize = [...document.querySelectorAll('.book__control_font-size')]
const book = document.querySelector('.book')

controlFontSize.forEach(control => {
    const fontsSize = [...control.children]
    fontsSize.forEach(fontSize => {
        fontSize.addEventListener('click', event => {
            fontsSize.forEach(element => {
                if (element.classList.contains('font-size_active')) {
                    element.classList.remove('font-size_active')
                }
            })
            book.className = 'book'
            book.classList.add(fontSize.classList[1])
            fontSize.classList.add('font-size_active')
            event.preventDefault()
        })
    })
})

const controlColor = [...document.querySelectorAll('.book__control_color')]

controlColor.forEach(control => {
    const colors = [...control.querySelectorAll('.color')]
    colors.forEach(color => {
        console.log(color)
        color.addEventListener('click', event => {
            colors.forEach(element => {
                if (element.classList.contains('color_active')) {
                    element.classList.remove('color_active')
                }
            })
            bookContent.style.color = color.dataset.textColor
            color.classList.add('color_active')
            event.preventDefault()
        })
    })
})

const controlBackground = [...document.querySelectorAll('.book__control_background')]
const bookContent = document.querySelector('.book__content')
controlBackground.forEach(control => {
    const backgrounds = [...control.children]
    backgrounds.forEach(background => {
        console.log(background)
        background.addEventListener('click', event => {
            backgrounds.forEach(element => {
                if (element.classList.contains('color_active')) {
                    element.classList.remove('color_active')
                }
            })
            bookContent.style.background = background.dataset.bgColor
            background.classList.add('color_active')
            event.preventDefault()
        })
    })
})