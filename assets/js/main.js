const Header = document.querySelector("header");
const Hero = document.querySelector("#hero");
const InnerWidth = window.innerWidth;
const InnerHeight = window.innerHeight;

let commentsNumber = 1;
let added = false;
window.onload = function () {
    const HeaderHeight = Header.offsetHeight;
    Hero.style.paddingTop = HeaderHeight + "px";
    if (InnerWidth < 768) {
        commentsNumber = 2;
    }
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

var swiper = new Swiper(".mySwiper", {
    slidesPerView: commentsNumber,
    spaceBetween: 50,
    navigation: {
        nextEl: ".swiper-button-next1",
        prevEl: ".swiper-button-prev1",
    },
    loop: true,
});
