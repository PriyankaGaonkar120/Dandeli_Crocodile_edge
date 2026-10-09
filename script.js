/* =====================================================
   DANDELI CROCODILE EDGE HOME STAY
   JavaScript
===================================================== */


/* =====================================================
   BOOKING.COM URL
===================================================== */

const BOOKING_URL =
    "https://www.booking.com/hotel/in/dandeli-crocodile-edge-home-stay.hi.html?aid=1188619&checkin=&checkout=&group_adults=2&group_children=0&room1=A,A&label=6ac7b840ef742eaf9e28c55f&aid=1538557&selected_currency=INR&hotelids=7267590";


/* =====================================================
   BOOK NOW BUTTONS
===================================================== */

const bookingButtons =
    document.querySelectorAll(".book");


bookingButtons.forEach((button) => {

    button.href = BOOKING_URL;

    button.target = "_blank";

    button.rel = "noopener noreferrer";

});


/* =====================================================
   NAVBAR SCROLL EFFECT
===================================================== */

const navbar =
    document.getElementById("navbar");


function updateNavbar() {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

}


window.addEventListener(
    "scroll",
    updateNavbar
);


updateNavbar();


/* =====================================================
   MOBILE MENU
===================================================== */

const menuToggle =
    document.getElementById("menuToggle");

const mobileMenu =
    document.getElementById("mobileMenu");


menuToggle.addEventListener("click", () => {

    mobileMenu.classList.toggle("active");

});


/* Close mobile menu after clicking a link */

document
    .querySelectorAll(".mobile-menu a")
    .forEach((link) => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("active");

        });

    });


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* =====================================================
   GALLERY LIGHTBOX
===================================================== */

const lightbox =
    document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const lightboxCaption =
    document.getElementById("lightboxCaption");

const lightboxClose =
    document.getElementById("lightboxClose");


const galleryImages =
    document.querySelectorAll(
        ".photo-grid figure img"
    );


galleryImages.forEach((image) => {

    image.addEventListener("click", () => {

        lightboxImage.src = image.src;

        lightboxImage.alt = image.alt;

        lightboxCaption.textContent =
            image.alt;

        lightbox.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});


function closeLightbox() {

    lightbox.classList.remove("active");

    document.body.style.overflow = "";

}


lightboxClose.addEventListener(
    "click",
    closeLightbox
);


/* Close by clicking outside image */

lightbox.addEventListener(
    "click",
    (event) => {

        if (
            event.target === lightbox
        ) {

            closeLightbox();

        }

    }
);


/* Close with Escape key */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape"
        ) {

            closeLightbox();

        }

    }
);


/* =====================================================
   FOOTER YEAR
===================================================== */

const year =
    document.getElementById("year");


if (year) {

    year.textContent =
        new Date().getFullYear();

}


/* =====================================================
   SMOOTH SCROLL
===================================================== */

document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach((link) => {

        link.addEventListener(
            "click",
            function (event) {

                const targetId =
                    this.getAttribute("href");

                if (
                    !targetId ||
                    targetId === "#"
                ) {

                    return;

                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (!target) {

                    return;

                }


                event.preventDefault();


                const navbarHeight =
                    navbar.offsetHeight;


                const targetPosition =
                    target.offsetTop -
                    navbarHeight;


                window.scrollTo({

                    top: targetPosition,

                    behavior: "smooth"

                });

            }
        );

    });