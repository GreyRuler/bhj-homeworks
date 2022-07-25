const dropdowns = [...document.querySelectorAll('.dropdown')];

dropdowns.forEach(item => {
    const dropdown = item.querySelector('.dropdown__value')
    const dropdownList = item.querySelector('.dropdown__list')
    const dropdownItems = item.querySelectorAll('.dropdown__item ')

    dropdownItems.forEach(element => {
        element.addEventListener('click', function(event) {
            dropdown.textContent = this.textContent
            dropdownList.className = 'dropdown__list'
            event.preventDefault()
        })
    })
    dropdown.addEventListener('click', function() {
        if (dropdownList.className === 'dropdown__list dropdown__list_active') {
            dropdownList.className = 'dropdown__list'
            return
        }
        dropdownList.className += ' dropdown__list_active'
    })
});