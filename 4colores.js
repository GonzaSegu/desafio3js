//ejercicio 3.2
document.getElementById('div1').addEventListener('click', function() {
    this.style.backgroundColor = 'black';
    console.log('funcionando div 1');
});

document.getElementById('div2').addEventListener('click', function() {
    this.style.backgroundColor = 'black';
});

document.getElementById('div3').addEventListener('click', function() {
    this.style.backgroundColor = 'black';
});

document.getElementById('div4').addEventListener('click', function() {
    this.style.backgroundColor = 'black';
});






/* alternativa 3.2
document.addEventListener('DOMContentLoaded', function() {
    const divs = ['div1', 'div2', 'div3', 'div4'];

    divs.forEach(function(id) {
        document.getElementById(id).addEventListener('click', function() {
            this.style.backgroundColor = 'black';
        });
    });
});   */