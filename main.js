const mainEl = document.querySelector('main')
const arrowLeft = document.querySelector('.arrow_left')
const arrowRight = document.querySelector('.arrow_right')

const images = [
    'url(./media/image_frame.jpeg)',
    'url(./media/image2.jpeg)',
    'url(./media/image3.jpeg)',
    'url(./media/image4.jpeg)',
    'url(./media/image_frame.jpeg)'
]

mainEl.style.background = images[0]
mainEl.style.backgroundSize = 'cover'

let add0n = 0
let less0n = images.length - 1


arrowRight.addEventListener(
    'click',
    () => {
        ++add0n
        if(add0n / less0n === 1){
            add0n = 0
        }
        mainEl.style.background = images[add0n]
        mainEl.style.backgroundSize = 'cover'

    }
)

arrowLeft.addEventListener(
    'click',
    () => {
        --less0n
        if(less0n === 0){
            less0n = images.length - 1
        }
        mainEl.style.background = images[less0n]
        mainEl.style.backgroundSize = 'cover'

    }
)