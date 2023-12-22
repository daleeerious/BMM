let menu = document.querySelector('#menu-icon');
let placesLink = document.querySelector('header .navbar li:nth-child(2) a');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    menu.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    menu.classList.remove('active');
};

placesLink.addEventListener('click', (event) => {
    event.preventDefault(); 
    scrollToAttractivePlaces();
});

function scrollToAttractivePlaces() {
    const attractivePlaces = document.getElementById("places");
    if (attractivePlaces) {
        attractivePlaces.scrollIntoView({
            behavior: "smooth"
        });
    } else {
        console.error("The 'places' element was not found.");
    }
}

var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    
});

function scrollToWatchPlaces() {
    const watchPlaces = document.getElementById("videos");
    if (watchPlaces) {
        window.scrollTo({
            top: watchPlaces.offsetTop,
            behavior: "smooth"
        });
    } else {
        console.error("The 'videos' element was not found.");
    }
}

let videosLink = document.querySelector('header .navbar li:nth-child(3) a');

videosLink.addEventListener('click', (event) => {
    event.preventDefault(); 
    scrollToWatchPlaces();
});

function scrollToWatchPlaces() {
    const watchPlacesSection = document.getElementById("videos");
    if (watchPlacesSection) {
        watchPlacesSection.scrollIntoView({
            behavior: "smooth"
        });
    } else {
        console.error("The 'videos' element was not found.");
    }
}

let aboutLink = document.querySelector('header .navbar li:nth-child(4) a');

aboutLink.addEventListener('click', (event) => {
    event.preventDefault(); 
    scrollToAboutSection();
});

function scrollToAboutSection() {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
        aboutSection.scrollIntoView({
            behavior: "smooth"
        });
    } else {
        console.error("The 'about' element was not found.");
    }
}
function goTo(url){
    window.location.href=url;
}
