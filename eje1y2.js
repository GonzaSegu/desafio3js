// ejercicio 1
const example = function (a, b, c){
    return a+b+c
    }

//ejercicio 2
const suma = (a, b) => a + b


//ejercicio 2.3
const elemento = document.getElementById("elemento")

function pintar(evento, color = 'yellow'){
    evento.style.backgroundColor = color
}

elemento.style.backgroundColor = 'green'
elemento.addEventListener("click", () => {pintar(elemento)} )
