/* 3.3 */

document.addEventListener("keydown", function(evento){
    if (evento.key === "a" || evento.key === "A"){
        pintar('pink');
    }
    else if (evento.key === "s" || evento.key === "S" ){
        pintar('orange');
    }
    else if (evento.key === "d" || evento.key === "D" ){
        pintar('lightblue');
    }
    else if (evento.key === "q" || evento.key === "Q"){
        agregarElemento('purple');
    }
    else if (evento.key === "w" || evento.key === "W"){
        agregarElemento('grey');
    } 
    else if (evento.key === "e" || evento.key === "E"){
        agregarElemento('brown');
    } 
})


const pintar = function(color){
    contenedor = document.querySelector('#tecla');
    console.log ('color ' + color);
    contenedor.style.backgroundColor = color
}

const agregarElemento = function(cooloor){
    nuevo = document.createElement('div')
    nuevo.style.width = '200px'
    nuevo.style.height = '200px'
    nuevo.style.backgroundColor = cooloor
    nuevo.textContent = "Elemento agregado"
    contenedor.appendChild(nuevo)
    const ultimoDiv = document.body.querySelector('div:last-of-type')
    ultimoDiv.insertAdjacentElement('afterend', nuevo)
}

