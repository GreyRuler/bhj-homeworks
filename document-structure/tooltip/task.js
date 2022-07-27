const hasTooltip = [...document.querySelectorAll('.has-tooltip')]

hasTooltip.forEach(element => {
    element.addEventListener('click', event => {
        let tooltip = element.nextElementSibling
        if (tooltip && tooltip.classList.contains('tooltip')) {
            tooltip.classList.toggle('tooltip_active')
        } else {
            const currentTooltip = document.querySelector('.tooltip')
            if (currentTooltip) currentTooltip.remove()
            tooltip = document.createElement('div')
            tooltip.classList.add('tooltip', 'tooltip_active')
            tooltip.setAttribute("data-position", "bottom")
            tooltip.innerText = element.title
            element.insertAdjacentElement("afterend", tooltip)
        }
        const heightToElement = window.scrollY + element.getBoundingClientRect().top
        const widthToElement = window.scrollX + element.getBoundingClientRect().left
        switch (tooltip.dataset.position) {
            case "top":
                tooltip.style.top = heightToElement - 30 + "px"
                tooltip.style.left = widthToElement + "px"
                break
            case "left":
                tooltip.style.top = heightToElement + "px"
                tooltip.style.left = widthToElement - tooltip.getBoundingClientRect().width + "px"
                break
            case "right":
                tooltip.style.top = heightToElement + "px"
                tooltip.style.left = widthToElement + element.getBoundingClientRect().width + "px"
                break
            case "bottom":
                tooltip.style.top = heightToElement + 20 + "px"
                tooltip.style.left = widthToElement + "px"
                break
        }
        event.preventDefault()
    })
})