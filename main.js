let upBtn = document.querySelector('.up-button');
let downBtn = document.querySelector('.down-button');

let mainSlide = document.querySelector('.main-slide');
let slidesCount = mainSlide.querySelectorAll('div').length;
let container = document.querySelector('.container');

let sidebar = document.querySelector('.sidebar');
sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

upBtn.addEventListener('click', () => {
    changeSlide('up')
})

downBtn.addEventListener('click', () => {
    changeSlide('down')
})

let activeSlideIndex = 0
function changeSlide(direction) {

    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex === slidesCount) {
            activeSlideIndex = 0
        }
    } else if (direction === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1
        }
    }

    let height = container.clientHeight;
    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}

document.addEventListener('keydown', (el) => {
    if (el.key === 'ArrowUp') {
        changeSlide('up')
    } else if (el.key === 'ArrowDown') {
        changeSlide('down')
    }
})