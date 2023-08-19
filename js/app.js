'use strict'

const grande = document.querySelector('.grande'); 
const punto  = document.querySelectorAll('.punto');
// Cuando CLICK en punto
    // Saber la posición de ese punto
    // Aplicar un transform translateX al grande
    // QUITAR la clase activo de TODOS puntos
    // AÑADIR la clase activo al punto que hemos hecho CLICK

punto.forEach((item, index) => {
    punto[index].addEventListener('click', () => {
        let posicion = index;
        const NumImg = 3;
        let value = (100/NumImg)///valeu  varia numero de imagenes 
        console.log(index);
        //operacion = posicion inicial(0%) * -50;
        let operacion = posicion * - value;//
        grande.style.transform = `translateX(${operacion}%)`;

        punto.forEach(punto => punto.classList.remove('activo'));
        item.classList.add('activo');
        /* 
        // Recorremos TODOS los punto
        punto.forEach( ( cadaPunto , i )=>{
            // Quitamos la clase ACTIVO a TODOS los punto
            punto[i].classList.remove('activo')
        })
        // Añadir la clase activo en el punto que hemos hecho CLICK
        punto[i].classList.add('activo')
         */
    });
})