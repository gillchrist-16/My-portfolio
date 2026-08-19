/*==========================================================
                PRELOADER
==========================================================*/

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    if (preloader) {

        preloader.style.display = "none";

    }

});


/*==========================================================
                MOBILE MENU
==========================================================*/

const menuBtn = document.querySelector("#menu-btn");

const navbar = document.querySelector("nav");


if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        navbar.classList.toggle("active");

        menuBtn.classList.toggle("fa-xmark");

    });

}


/* Close Menu After Clicking Link */

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

    });

});


/*==========================================================
                SCROLL TO TOP BUTTON
==========================================================*/

const scrollBtn = document.querySelector("#scrollTop");


window.addEventListener("scroll", () => {


    if (window.scrollY > 300) {

        scrollBtn.classList.add("active");

    } else {

        scrollBtn.classList.remove("active");

    }


});


scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/*==========================================================
                SCROLL PROGRESS BAR
==========================================================*/


const progressBar = document.querySelector("#progress-bar");


window.addEventListener("scroll", () => {


    let scrollTop =
        document.documentElement.scrollTop;


    let scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;


    let progress =
        (scrollTop / scrollHeight) * 100;


    if (progressBar) {

        progressBar.style.width =
            progress + "%";

    }


});

/*==========================================================
                TYPING ANIMATION
==========================================================*/

const typedText = document.querySelector(".typing");


if (typedText) {

    new Typed(".typing", {

        strings: [

            "Full Stack Developer",

            "Python Developer",

            "Machine Learning Enthusiast",

            "IT Student"

        ],

        typeSpeed: 80,

        backSpeed: 50,

        backDelay: 1500,

        loop: true

    });

}


/*==========================================================
                AOS ANIMATION
==========================================================*/


AOS.init({

    duration: 1000,

    once: true,

    offset: 100

});


/*==========================================================
                SWIPER TESTIMONIAL SLIDER
==========================================================*/


const swiper = new Swiper(".testimonial-slider", {

    loop: true,

    autoplay: {

        delay: 3000,

        disableOnInteraction: false

    },


    pagination: {

        el: ".swiper-pagination",

        clickable: true

    },


    breakpoints: {


        0: {

            slidesPerView: 1

        },


        768: {

            slidesPerView: 2

        },


        1200: {

            slidesPerView: 3

        }

    }

});



/*==========================================================
                PARTICLES BACKGROUND
==========================================================*/


if (document.getElementById("particles-js")) {


    particlesJS("particles-js", {


        particles: {


            number: {

                value: 80,

                density: {

                    enable: true,

                    value_area: 800

                }

            },


            color: {

                value: "#00E5FF"

            },


            shape: {

                type: "circle"

            },


            opacity: {

                value: 0.5

            },


            size: {

                value: 3

            },


            line_linked: {

                enable: true,

                distance: 150,

                color: "#6C63FF",

                opacity: 0.3,

                width: 1

            },


            move: {


                enable: true,

                speed: 2


            }


        },


        interactivity: {


            events: {


                onhover: {

                    enable: true,

                    mode: "grab"

                },


                onclick: {

                    enable: true,

                    mode: "push"

                }


            }


        },


        retina_detect: true


    });


}

/*==========================================================
                DARK / LIGHT MODE
==========================================================*/

const themeBtn = document.querySelector("#theme-btn");


if (themeBtn) {

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");


        if (document.body.classList.contains("light-mode")) {

            themeBtn.innerHTML =
                '<i class="fa-solid fa-moon"></i>';

        } else {

            themeBtn.innerHTML =
                '<i class="fa-solid fa-sun"></i>';

        }

    });

}



/*==========================================================
                ACTIVE NAVIGATION ON SCROLL
==========================================================*/


const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");


window.addEventListener("scroll", () => {


    let current = "";


    sections.forEach(section => {


        let sectionTop =
            section.offsetTop - 150;


        let sectionHeight =
            section.clientHeight;


        if (scrollY >= sectionTop &&
            scrollY < sectionTop + sectionHeight) {


            current = section.getAttribute("id");


        }


    });



    navLinks.forEach(link => {


        link.classList.remove("active");


        if (link.getAttribute("href") ===
            "#" + current) {


            link.classList.add("active");


        }


    });


});



/*==========================================================
                NUMBER COUNTER ANIMATION
==========================================================*/


const counters =
    document.querySelectorAll(".stat-card h2");


let started = false;



window.addEventListener("scroll", () => {


    const stats =
        document.querySelector(".statistics");


    if (!stats) return;



    let position =
        stats.offsetTop - window.innerHeight + 200;



    if (scrollY > position && !started) {


        counters.forEach(counter => {


            let target =
                parseInt(counter.innerText);


            let count = 0;


            let speed =
                target / 100;



            let update = () => {


                count += speed;


                if (count < target) {


                    counter.innerText =
                        Math.floor(count) + "+";


                    setTimeout(update, 20);


                } else {


                    counter.innerText =
                        target + "+";


                }


            };


            update();


        });


        started = true;


    }


});



/*==========================================================
                CONTACT FORM VALIDATION
==========================================================*/


const contactForm =
    document.querySelector(".contact-form");


if (contactForm) {


    contactForm.addEventListener("submit", (e) => {


        e.preventDefault();



        let inputs =
            contactForm.querySelectorAll("input");



        let valid = true;



        inputs.forEach(input => {


            if (input.value.trim() === "") {


                valid = false;


            }


        });



        if (valid) {


            alert(
                "Thank you! Your message has been sent."
            );


            contactForm.reset();


        } else {


            alert(
                "Please fill all required fields."
            );


        }



    });


}