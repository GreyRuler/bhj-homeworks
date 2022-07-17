const sliders = [...document.querySelectorAll('.slider__item')];
const sliderDots = [...document.querySelector('.slider__dots').children];

function disable() {
    const currentActiveIndex = sliders.findIndex(item => 
        item.className === "slider__item slider__item_active"
    );
    sliders[currentActiveIndex].className = "slider__item";
    sliderDots[currentActiveIndex].className = "slider__dot";
    return currentActiveIndex;
}

function active(indexCurrent) {
    let index = indexCurrent;
    if (index < 0) {
        index = sliders.length - 1;
    } else if (index >= sliders.length) {
        index = 0;
    }
    sliders[index].className = "slider__item slider__item_active";
    sliderDots[index].className = "slider__dot slider__dot_active";
}

const sliderArrowPrev = document.querySelector('.slider__arrow_prev');
sliderArrowPrev.onclick = () => {
    const currentSliderIndex = sliders.findIndex(item => 
        item.className === "slider__item slider__item_active"
    );
    disable();
    active(currentSliderIndex - 1);
}

const sliderArrowNext = document.querySelector('.slider__arrow_next');
sliderArrowNext.onclick = () => {
    const currentSliderIndex = sliders.findIndex(item => 
        item.className === "slider__item slider__item_active"
    );
    disable();
    active(currentSliderIndex + 1);
}

sliderDots.forEach((item, index) => {
    item.onclick = () => {
        disable();
        active(index);
    }
});