

const enlaces = document.querySelectorAll('#links a');
let enlaceAnterior = null;

enlaces.forEach(enlace => {
    enlace.addEventListener('click', () => {
        if (enlaceAnterior) {
            enlaceAnterior.style.color = '';
        }
        // enlace.style.border-botton = 'rgb(247, 109, 29)'; 
        enlaceAnterior = enlace; 
    });
});


const btnMenu = document.getElementById('btn-menu-bar');
const navRight = document.querySelector('.nav-right');
const title = document.querySelector('.title');


btnMenu.addEventListener('click', (e) => {
    navRight.classList.toggle('show');
    if (navRight.classList.contains('show') ) {
    } else {
        title.style.transform = 'translateY(0)';
    }
});


