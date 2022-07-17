const sliders = [...document.querySelectorAll('.slider__item')];
const sliderDots = [...document.querySelector('.slider__dots').children];

function disableCurrentDot() {
    const currentDot = sliderDots.find(item =>
        item.className === "slider__dot slider__dot_active"
    );
    currentDot.className = "slider__dot";
}

function disableCurrentSlider() {
    const currentSlider = sliders.find(item => 
        item.className === "slider__item slider__item_active"
    );
    currentSlider.className = "slider__item";
}

const sliderArrowPrev = document.querySelector('.slider__arrow_prev');
sliderArrowPrev.onclick = () => {
    const currentSliderIndex = sliders.findIndex(item => 
        item.className === "slider__item slider__item_active"
    );
    disableCurrentDot();
    if (currentSliderIndex - 1 < 0) {
        sliders[currentSliderIndex].className = "slider__item";
        sliders[sliders.length - 1].className += " slider__item_active";
        sliderDots[sliders.length - 1].className += " slider__dot_active";
    } else {
        sliders[currentSliderIndex].className = "slider__item";
        sliders[currentSliderIndex - 1].className += " slider__item_active";
        sliderDots[currentSliderIndex - 1].className += " slider__dot_active"
    }
}

const sliderArrowNext = document.querySelector('.slider__arrow_next');
sliderArrowNext.onclick = () => {
    const currentSliderIndex = sliders.findIndex(item => 
        item.className === "slider__item slider__item_active"
    );
    disableCurrentDot();
    if (currentSliderIndex + 1 < sliders.length) {
        sliders[currentSliderIndex].className = "slider__item";
        sliders[currentSliderIndex + 1].className += " slider__item_active";
        sliderDots[currentSliderIndex + 1].className += " slider__dot_active";
    } else {
        sliders[currentSliderIndex].className = "slider__item";
        sliders[0].className += " slider__item_active";
        sliderDots[0].className += " slider__dot_active";
    }
}

sliderDots.forEach(item => {
    item.onclick = () => {
        disableCurrentDot();
        item.className += " slider__dot_active";
        disableCurrentSlider();
        const currentDotIndex = sliderDots.findIndex(item =>
            item.className === "slider__dot slider__dot_active"
        );
        sliders[currentDotIndex].className += " slider__item_active";
    }
});