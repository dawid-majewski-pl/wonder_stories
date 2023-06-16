window.addEventListener("scroll", function(){
    const nav = this.document.querySelector(".navigation");
    const logo = document.querySelector(".navigation__logo");
    nav.classList.toggle("navigation--sticky", window.scrollY > 0);
    logo.classList.toggle("navigation__logo--visible", window.scrollY > 0);
});