const menuBtn = document.getElementById('menu-btn')
const closeMenu = document.getElementById('close-menu')
const navLinks = document.getElementById('nav-links')
const navOverlay = document.getElementById('nav-overlay')

const leftArrow = document.getElementById('left-arrow')
const rightArrow = document.getElementById('right-arrow')

const gridBoxTwo = document.getElementById('grid-box-2')
const gridBoxTwoSlides = gridBoxTwo.getElementsByClassName('slide-box')


let heroImageList = [
    {
        imageId: 1,
        imageSrc: 'desktop-image-hero-1.jpg',
    },
    {
        imageId: 2,
        imageSrc: 'desktop-image-hero-2.jpg',
    },
    {
        imageId: 3,
        imageSrc: 'desktop-image-hero-3.jpg',
    }
]

let heroImage = document.getElementById('hero-image')
let startingHeroImage = 0


slideIndex = 0
for(let i = 0; i < gridBoxTwoSlides.length; i++) {
    gridBoxTwoSlides[i].style.display = 'none'
}
gridBoxTwoSlides[0].style.display = 'block'


menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show')
    navOverlay.classList.add('show')
})

closeMenu.addEventListener('click', () => {
    navLinks.classList.remove('show')
    navOverlay.classList.remove('show')
})

leftArrow.addEventListener('click', () => {
    changeHeroImageLeft()

    // Decrement the slide index and wrap around if necessary
    slideIndex = (slideIndex - 1 + gridBoxTwoSlides.length) % gridBoxTwoSlides.length;
    // Show the new slide and hide the old one
    gridBoxTwoSlides[slideIndex].style.display = "block";
    gridBoxTwoSlides[(slideIndex + 1) % gridBoxTwoSlides.length].style.display = "none";
})

rightArrow.addEventListener('click', () => {
    changeHeroImageRight()

    // Increment the slide index and wrap around if necessary
    slideIndex = (slideIndex + 1) % gridBoxTwoSlides.length;
    // Show the new slide and hide the old one
    gridBoxTwoSlides[slideIndex].style.display = "block";
    gridBoxTwoSlides[(slideIndex + gridBoxTwoSlides.length - 1) % gridBoxTwoSlides.length].style.display = "none";
})

function changeHeroImageLeft() {
    startingHeroImage -= 1

    if(startingHeroImage < 0) {
        startingHeroImage = 2
    }

    heroImage.src = `images/${heroImageList[startingHeroImage].imageSrc}`
}

function changeHeroImageRight() {
    startingHeroImage += 1

    if(startingHeroImage > 2) {
        startingHeroImage = 0
    }

    heroImage.src = `images/${heroImageList[startingHeroImage].imageSrc}`
}
