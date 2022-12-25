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
// mainEl.style.backgroundSize = 'cover'

const addon = 0
arrowRight.addEventListener(
    'click',
    () => {
            // mainEl.style.background = images[++addon]
            for(i=0; i<images.length; i++){
                mainEl.style.background = images[++i]
            }
    }
)