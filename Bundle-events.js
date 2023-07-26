// H e a d e r E v e n t s


// T h e  A c t i v e  E f f e c t i o n 
const navLinks = document.querySelectorAll('nav a');

function handleNavLinkClick(event) {
    event.preventDefault();
    navLinks.forEach(link => link.classList.remove('active-link'));
    event.target.classList.add('active-link');
}
navLinks.forEach(link => link.addEventListener('click', handleNavLinkClick));
// T h e  A c t i v e  E f f e c t i o n


const IconBurger = document.querySelector('.toggle');
const NavbarLinks = document.querySelector('.links');


IconBurger.addEventListener('click', function() {

    if (NavbarLinks.style.display === 'none') {
        NavbarLinks.style.display = 'flex';
    } else {
        NavbarLinks.style.display = 'none';
    }
  });


const mediaQuery = window.matchMedia('(max-width: 768px)');

function handleMediaQueryChange(event) {
if (event.matches) {
NavbarLinks.style.display= 'none'
NavbarLinks.classList.add('animate__animated')
NavbarLinks.classList.add('animate__fadeInDown')


}
}
handleMediaQueryChange(mediaQuery);
mediaQuery.addListener(handleMediaQueryChange);


// H e a d e r E v e n t s










function reloadPage() {
    location.reload();
}
window.addEventListener('resize', reloadPage);



