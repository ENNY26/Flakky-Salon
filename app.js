

var menubtn = document.getElementById("menubtn")
var sidenav = document.getElementById("sidenav")
var menu = document.getElementById("menu")
sidenav.style.right = "-250px"
menubtn.onclick = function() {
    if(sidenav.style.right == "-250px") {
        sidenav.style.right = "0";
        menu.src="img/close.png";
    } else {
        sidenav.style.right = "-250px";
        menu.src="img/menu.png";
    }
}

// All animations will take exactly 500ms
var scroll = new SmoothScroll('a[href*="#"]', {
speed: 1000,
speedAsDuration: true
});

document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.testimonial-slider');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    const testimonials = document.querySelectorAll('.testimonial');
    let currentIndex = 0;

    function showTestimonial(index) {
        const offset = -index * (testimonials[0].offsetWidth + 30); // 250px width + 30px margin
        slider.style.transform = `translateX(${offset}px)`;
    }

    function nextTestimonial() {
        currentIndex++;
        if (currentIndex >= testimonials.length) {
            currentIndex = 0;
        }
        showTestimonial(currentIndex);
    }

    function prevTestimonial() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = testimonials.length - 1;
        }
        showTestimonial(currentIndex);
    }

    rightArrow.addEventListener('click', nextTestimonial);
    leftArrow.addEventListener('click', prevTestimonial);
});
