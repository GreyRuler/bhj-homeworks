const tabs = document.querySelectorAll('.tabs')

tabs.forEach(tab => {
    let tabItems = [...tab.querySelectorAll('.tab')]
    let tabContents = [...tab.querySelectorAll('.tab__content')]
    tabItems.forEach((element, index) => {
        element.addEventListener('click', event => {
            const currentTab = tab.querySelector('.tab.tab_active')
            currentTab.className = 'tab'
            if (element.className === 'tab tab_active') {
                element.className = 'tab'
                event.preventDefault()
            }
            element.className = 'tab tab_active'
            const currentTabContent = tab.querySelector('.tab__content.tab__content_active')
            currentTabContent.className = 'tab__content'
            tabContents[index].className = 'tab__content tab__content_active'
        })
    })
})