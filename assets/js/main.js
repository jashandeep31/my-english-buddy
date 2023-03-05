const Header = document.querySelector("header");
const Hero = document.querySelector("#home");
const MenuButton = document.querySelector(".navbar-toggler");
const MobileMenu = document.querySelector(".mobile-menu");
const InnerWidth = window.innerWidth;
const InnerHeight = window.innerHeight;
const currentURL = window.location;
let commentsNumber = 1;
let added = false;

let navbarState = false;
const closeNavbar = () => {
    MobileMenu.classList.remove("active");
    navbarState = false;
    MenuButton.innerHTML = ` <i class="bx bx-menu text-xl"></i>`;
};

const ToggelNavbarState = () => {
    MobileMenu.classList.toggle("active");
    navbarState = !navbarState;
    if (navbarState) {
        MenuButton.innerHTML = `  <i class="bx bx-x text-xl"></i>`;
    } else {
        MenuButton.innerHTML = ` <i class="bx bx-menu text-xl"></i>`;
    }
};
MenuButton.addEventListener("click", function () {
    ToggelNavbarState();
});

const linksClasses = [
    { homeLink: "home" },
    { aboutLink: "aboutUs" },
    { courseStrutureLink: "courseStructure" },
    { faqLink: "FAQ" },
    { contactLink: "contact" },
];
const linkActivator = () => {
    let found = false;
    linksClasses.forEach((link) => {
        for (const key in link) {
            if (currentURL.hash.includes(link[key])) {
                document.querySelector(`.${key}`).classList.add("active");
                found = true;
            } else {
                document.querySelector(`.${key}`).classList.remove("active");
            }
        }
    });
    if (!found) {
        document.querySelector(`.homeLink`).classList.add("active");
    }
};
window.addEventListener("hashchange", function () {
    linkActivator();
    closeNavbar();
});

window.onload = function () {
    const HeaderHeight = Header.offsetHeight;
    Hero.style.paddingTop = HeaderHeight + "px";
    linkActivator();

    if (InnerWidth > 768) {
        commentsNumber = 2;
    }

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: commentsNumber,
        spaceBetween: 50,
        navigation: {
            nextEl: ".swiper-button-next1",
            prevEl: ".swiper-button-prev1",
        },
        loop: true,
    });
};
window.onscroll = function () {
    const currentScrollY = window.scrollY;
    const HeaderHeight = Header.offsetHeight;
    if (currentScrollY > HeaderHeight && !added) {
        Header.style.borderBottom = "1px solid #eaeaea";
        Header.style.backgroundColor = "#fcf5ebf3";

        added = true;
    } else if (added && currentScrollY < HeaderHeight) {
        Header.style.borderBottom = "0px solid #eaeaea";
        added = false;
    }
};
