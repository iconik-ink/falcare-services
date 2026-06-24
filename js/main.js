gsap.registerPlugin(ScrollTrigger);

/* Hero Intro */

gsap.from(".hero-content",{
y:100,
opacity:0,
duration:1.2
});

/* Hero Zoom Effect */

const heroTimeline = gsap.timeline({

scrollTrigger:{
trigger:"#hero",
start:"top top",
end:"+=150%",
scrub:1,
pin:true
}

});

heroTimeline.to("#heroImage",{

scale:1.8,
duration:1

},0);

heroTimeline.to(".hero-content",{
    scale:0.9,
    y:-50
},0);

heroTimeline.to(".shape1",{

x:-250,
y:-150,
opacity:0

},0);

heroTimeline.to(".shape2",{

x:250,
y:150,
opacity:0

},0);

heroTimeline.to(".shape3",{

x:150,
y:-200,
opacity:0

},0);

/* Services Reveal */

gsap.utils.toArray(".service").forEach(section=>{

gsap.from(section.querySelector(".image"),{

scrollTrigger:{
trigger:section,
start:"top 80%"
},

x:-100,
opacity:0,
duration:1

});

gsap.from(section.querySelector(".content"),{

scrollTrigger:{
trigger:section,
start:"top 80%"
},

x:100,
opacity:0,
duration:1

});

});
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


/* ==================================
   WORKERS PAGE PARALLAX SLIDESHOW
================================== */

const slides = document.querySelectorAll('.slide');

if(slides.length){

let currentSlide = 0;

setInterval(() => {

slides[currentSlide].classList.remove('active');

currentSlide++;

if(currentSlide >= slides.length){
currentSlide = 0;
}

slides[currentSlide].classList.add('active');

}, 5000);

window.addEventListener('scroll', () => {

const scrolled = window.pageYOffset;

slides.forEach(slide => {
slide.style.transform =
`translateY(${scrolled * 0.35}px) scale(1.1)`;
});

});

}

