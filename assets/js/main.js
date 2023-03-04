const Header = document.querySelector("header");
const Hero = document.querySelector("#hero");
const InnerWidth = window.innerWidth;
const InnerHeight = window.innerHeight;

let added = false;
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
    slidesPerView: 2,
    spaceBetween: 50,
    navigation: {
        nextEl: ".swiper-button-next1",
        prevEl: ".swiper-button-prev1",
    },
    loop: true,
});
