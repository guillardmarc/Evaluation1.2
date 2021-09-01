$(document).ready(function(){
    $(".navbar-toggler").click(function(){
        $(".navbar-nav").toggleClass("bg-glass py-2 shadow-lg");
    });
})

window.addEventListener('scroll', () => { /* récuperation de la valeur du scroll) */
    const body = document.querySelector("body"); /* selec balise (body) */
    const nav = document.querySelector("nav");
    if(window.scrollY > 30 ){ /* Si la valeur du scroll est supperrieur à 30px */
        nav.classList.add("bg-glass","shadow-lg");
    }
    else{
        nav.classList.remove("bg-glass","shadow-lg");
    }
})
