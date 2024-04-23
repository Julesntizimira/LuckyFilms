const serviceLeft = document.querySelector(".left");
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

observer.observe(serviceLeft);


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
