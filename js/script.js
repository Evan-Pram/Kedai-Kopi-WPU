// Toogle clas active
const navbarNav = document.querySelector('.navbar-nav');

// ketika hamburger menu diklik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
}

// klik diluar sidebar untuk menutup sidebar
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
})

document.querySelector('.container-menu-card').addEventListener("mouseover", function(e){
    document.querySelector('.container-menu-card').classList.toggle('show');
})