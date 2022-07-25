const hasTooltip = [...document.querySelectorAll('.has-tooltip')]

hasTooltip.forEach(element => {
    element.addEventListener('click', event => {
        const tooltip = element.querySelector('.tooltip')
        if (tooltip) {
            tooltip.classList.toggle('tooltip_active')
        } else {
            const currentTooltip = document.querySelector('.tooltip')
            if (currentTooltip) currentTooltip.remove()
            const hint = document.createElement('div')
            hint.classList.add('tooltip', 'tooltip_active')
            hint.setAttribute("data-position", "top")
            hint.innerText = element.title
            element.insertAdjacentElement("afterbegin", hint)
        }
        event.preventDefault()
    })
})