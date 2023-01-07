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

let xf = 0
let xx = images.length - 1

let addon = 0
arrowRight.addEventListener(
    'click',
    () => {
        ++xf
        if(xf / xx === 1){
            xf = 0
        }
        mainEl.style.background = images[xf]
        mainEl.style.backgroundSize = 'cover'

    }
)

let lessOn = 5
arrowLeft.addEventListener(
    'click',
    () => {
        --xx
        if(xx === 0){
            xx = images.length - 1
        }
        mainEl.style.background = images[xx]
        mainEl.style.backgroundSize = 'cover'

    }
)