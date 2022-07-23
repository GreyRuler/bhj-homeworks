const reveals = [...document.querySelectorAll('.reveal')]

const isInViewport = function(element) {
    const viewportHeight = window.innerHeight
    const elementTop = element.getBoundingClientRect().top
    const elementBottom = element.getBoundingClientRect().bottom
    console.log(elementTop , elementBottom)
    if (elementTop < viewportHeight && elementBottom > 0) {
        element.classList.add('reveal_active')
    } else {
        element.classList.remove('reveal_active')
    }
}

reveals.forEach(revel => {
    window.addEventListener('scroll', () => {
        isInViewport(revel)
    })
})
