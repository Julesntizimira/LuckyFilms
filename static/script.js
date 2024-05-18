const serviceLeft = document.querySelector(".left");
const companyName =  document.querySelector(".home-span-one");
const welcomeMsg =  document.querySelector(".home-span-two");
const socialMedias = document.querySelector(".social-medias")
const homeBtn = document.querySelector(".home-btn")
const aboutContainer = document.querySelector('.about-container');
const workTopContainer  = document.querySelector('.work-top-container');
const pilotContent = document.querySelector('.pilot-content');
const teamContent = document.querySelector('.team-content');


const options = {
    root: null,
    threshold: 1,
    rootMargin: "100px"
}
const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
        entry.target.classList.toggle('animate');
        observer.unobserve(entry.target);
    })
}, options)

// observer.observe(serviceLeft);
// observer.observe(companyName);
// observer.observe(welcomeMsg);
// observer.observe(socialMedias);
// observer.observe(homeBtn);
observer.observe(aboutContainer);
observer.observe(workTopContainer);
observer.observe(pilotContent);
observer.observe(teamContent);




// const pathTwoCine = document.querySelector('.path-two-cine');
// const pathThreeCine = document.querySelector('.path-three-cine');

// async function HanleCineOpacity (path) { 
//     await new Promise(resolve => {
//         setTimeout(() => {
//             path.setAttribute('opacity', '1');
//             resolve(); // Resolve the promise after the timeout
//         }, 500);
//         path.setAttribute('opacity', '0'); // Reset opacity after the timeout
//     })
// }

// setInterval (() => {
//     [pathTwoCine, pathThreeCine].forEach((path) => {
//         HanleCineOpacity(path)
//     })
// }, 1000);


// const observer2 = new IntersectionObserver(function(entries, observer2) {
//     entries.forEach(entry => {
//         if (!entry.isIntersecting) {
//             return;
//         }
//         document.querySelector('.sunset').classList.toggle('hide');
//     })
// }, options)

// observer2.observe(document.querySelector('footer'))

document.addEventListener('DOMContentLoaded', function() {
    const home = document.querySelector('.home');
    const sunset = document.querySelector('.sunset');
    

    window.addEventListener('scroll', function() {
        if (window.scrollY > 1000) { 
            home.classList.add('hide');
            sunset.classList.remove('hide');
        } else {
            home.classList.remove('hide');
            sunset.classList.add('hide');
        }
    });
});

const menu = document.querySelector('.menu');
const navHidden = document.querySelector('.nav-ul-hidden');
const navItems = document.querySelectorAll('.nav-ul-hidden a');



menu.addEventListener('click', () => {
    navHidden.classList.toggle('visible');
});

navItems.forEach(item => {
    item.addEventListener('click', () => {
        navHidden.classList.toggle('visible');
    })
})
