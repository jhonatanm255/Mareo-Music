

const enlaces = document.querySelectorAll('#links a');
let enlaceAnterior = null;

enlaces.forEach(enlace => {
    enlace.addEventListener('click', () => {
        if (enlaceAnterior) {
            enlaceAnterior.style.color = '';
        }
        enlace.style.color = 'rgb(247, 109, 29)'; 
        enlaceAnterior = enlace; 
    });
});
