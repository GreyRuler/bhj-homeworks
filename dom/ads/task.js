const rotators = document.querySelectorAll('.rotator')
let counter = 0
let speed = 1000

const cyclicShift = (rotatorItems) => {
    if (counter >= rotatorItems.length) counter -= rotatorItems.length
    rotatorItems.forEach(element => {
        if (element.classList.contains('rotator__case_active')) {
            element.classList.remove('rotator__case_active')
        }
    })
    const color = rotatorItems[counter].dataset.color
    speed = rotatorItems[counter].dataset.speed
    rotatorItems[counter].style.color = color
    rotatorItems[counter].classList.add('rotator__case_active')
    counter += 1
}

rotators.forEach(rotator => {
    const rotatorItems = [...rotator.querySelectorAll('.rotator__case')]
    setInterval(cyclicShift, speed, rotatorItems)
})