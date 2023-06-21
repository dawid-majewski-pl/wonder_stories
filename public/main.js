window.addEventListener("scroll", function(){
    const nav = this.document.querySelector(".navigation");
    const logo = document.querySelector(".navigation__logo");
    nav.classList.toggle("navigation--sticky", window.scrollY > 0);
    logo.classList.toggle("navigation__logo--visible", window.scrollY > 0);
});

const link = document.querySelector(".mobile-navigation__list");
link.addEventListener("click", function(){
    const checkbox = document.querySelector(".cover__hamburger-toggler")
    checkbox.checked = false;
});