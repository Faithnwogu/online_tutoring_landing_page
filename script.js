// navbar 
const navLinks = document.querySelector('.navlinks');
const mobileNav = document.querySelector('.mobile');
const cta = document.querySelector('.cta');

mobileNav.addEventListener('click', ()=>{
       navLinks.classList.toggle('toggle');
       cta.classList.toggle('toggle');
})