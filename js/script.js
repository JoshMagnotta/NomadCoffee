// Menu Buttons Functionality

const menuButtons = Array.from(document.querySelectorAll('.menu-toggle'));
const menuImages = Array.from(document.querySelectorAll('.menu-image'));
const transitionList = Array.from(document.querySelectorAll('.transition'));

menuButtons.forEach(btn => {
    btn.addEventListener('click', btnOnClick);
});

function btnOnClick(event) {
    if(event.currentTarget.classList.contains('coffee')) {
        menuButtons[0].classList.add('active');
        menuButtons[1].classList.remove('active');
        menuImages[0].classList.add('active');
        menuImages[1].classList.remove('active');
        transitionList[0].classList.add('active');
        transitionList[1].classList.remove('active');
    } else {
        menuButtons[0].classList.remove('active');
        menuButtons[1].classList.add('active');
        menuImages[0].classList.remove('active');
        menuImages[1].classList.add('active');
        transitionList[0].classList.remove('active');
        transitionList[1].classList.add('active');   
    }    
}

// Carousel Functionality
const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');

const carouselItems = Array.from(document.querySelectorAll('.carousel-item'));
const navItems = Array.from(document.querySelectorAll('.nav-item'));
const CAROUSEL_SIZE = carouselItems.length;

try {
    leftBtn.addEventListener('click', swipe); 
    rightBtn.addEventListener('click', swipe);

} catch (ex) {
}

function swipe(e) {
    const currentCarouselItem = document.querySelector('.carousel-item.active');
    const currentIndex = carouselItems.indexOf(currentCarouselItem);

    let nextIndex;

    if(e.currentTarget.classList.contains('left')) {
        if(currentIndex === 0) {
            nextIndex = CAROUSEL_SIZE - 1;
        } else {
            nextIndex = currentIndex - 1;
        }
    } else {
        if(currentIndex === CAROUSEL_SIZE - 1) {
            nextIndex = 0;
        } else {
            nextIndex = currentIndex + 1;
        }
    }    

    carouselItems[nextIndex].classList.add('active');
    navItems[nextIndex].classList.add('active');
    currentCarouselItem.classList.remove('active');
    navItems[currentIndex].classList.remove('active');
}

navItems.forEach(nav => {
    nav.addEventListener("click", navClick);
});

function navClick(e) {
    const currentCarouselItem = document.querySelector('.carousel-item.active');
    const navCarouselItem = document.querySelector('.nav-item.active');
    const navItem = e.currentTarget;
    const carouselIndex = carouselItems.indexOf(currentCarouselItem);
    const navIndex = navItems.indexOf(navItem);

    if(e.currentTarget.classList.contains('active')) {
        return;
    } else {
        currentCarouselItem.classList.remove('active');
        navCarouselItem.classList.remove('active');

        carouselItems[navIndex].classList.add('active');
        console.log(carouselIndex);
        navItems[navIndex].classList.add('active');
    }
}

// FAQ Accordian
const root = document.documentElement;
const button = document.querySelectorAll('button.accordion-label'); // TODO: CHECK IF THIS IS RIGHT

button.forEach(button => { 
    if (button.classList.contains('accordion-label')) {
        button.addEventListener('click', buttonClick);
    }
});

function buttonClick(event) {

    const btn = event.target;

    btn.classList.toggle('open');

    const content = btn.nextElementSibling;
    content.classList.toggle('open');
    root.style.setProperty('--content-height', btn.nextElementSibling.scrollHeight + 'px');

    button.forEach(btns => {
        if (btns != btn && btns.classList.contains('open')) {
            btns.classList.toggle('open');
            btns.nextElementSibling.classList.toggle('open');
        }
    });
}


