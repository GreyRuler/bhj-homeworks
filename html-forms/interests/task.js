const interests = document.querySelectorAll('.interest')

function boolChecked(element, checkbox) {
    const interests = element.querySelector('.interests')
    if (interests === null) {
        return
    }
    const interestsChildren = [...interests.children]
    interestsChildren.forEach(interest => {
        const checkboxChildren = interest.querySelector('.interest__check')
        checkboxChildren.checked = checkbox.checked
        boolChecked(interest, checkboxChildren)
    })
}

interests.forEach(element => {
    const checkbox = element.querySelector('.interest__check')
    checkbox.addEventListener('change', () => {
        boolChecked(element, checkbox)
    })
})