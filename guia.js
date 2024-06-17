example = function (a, b, c){
        return a+b+c
        }

suma = (a, b) => a + b

document.addEventListener("keydown", function(evento){
    if (evento.key === "a" || evento.key === "A"){
        agregarElemento();
    }
    else if (evento.key === "d" || evento.key === "D" ){
        eliminarElemento();
    }
})


agregarElemento = function(){
    contenedor = document.getElementById('contenedor')
    nuevo = document.createElement('h1')
    nuevo.textContent = "Elemento agregado"
    contenedor.appendChild(nuevo)
    
}

function eliminarElemento(){
    contenedor = document.getElementById('contenedor')
    elementos = document.querySelectorAll('h1')
    if (elementos.length > 0){
        contenedor.removeChild(elementos[elementos.length -1])
    }    
}

 /* Llamamos a la función x */
x()
function x() { /* Declaramos la función x */
console.log("hola");
}
