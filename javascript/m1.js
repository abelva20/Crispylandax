// toogle class active
const navbarView = document.querySelector
('.navbar-nav');
document.querySelector('#Hamburger-Menu').
onclick = () => {
    navbarView.classList.toggle('active');
};

// hidden nav out humbergermenu//

const hambmenu = document.querySelector
('#Hamburger-Menu');

document.addEventListener('click', function(e) {
    if (!hambmenu.contains(e.target) && !navbarView.contains(e.target)) {
        navbarView.classList.remove('active')
    }
})