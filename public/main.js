window.addEventListener("scroll", function(){
    const nav = this.document.querySelector(".navigation");
    nav.classList.toggle("navigation--sticky", window.scrollY > 0);
})