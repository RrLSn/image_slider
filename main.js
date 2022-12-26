const mainEl = document.querySelector('main')
const arrowLeft = document.querySelector('.arrow_left')
const arrowRight = document.querySelector('.arrow_right')

const images = [
    'url(./media/image_frame.jpeg)',
    'url(./media/image2.jpeg)',
    'url(./media/image3.jpeg)',
    'url(./media/image4.jpeg)'
]

mainEl.style.background = images[0]
mainEl.style.backgroundSize = 'cover'

let addon = 0
arrowRight.addEventListener(
    'click',
    () => {
            ++addon
            mainEl.style.background = images[addon]
    }
)

let lessOn = 5
arrowLeft.addEventListener(
    'click',
    () => {
        --lessOn
        mainEl.style.background = images[lessOn]
    }
)