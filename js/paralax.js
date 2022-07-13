let izquierda = document.getElementById('izquierda')
let derecha = document.getElementById('derecha')
let cartel = document.getElementById('cartel')
let hombre = document.getElementById('hombre')
let mujer = document.getElementById('mujer')

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    
    izquierda.style.left =  value * -0.8 + 'px';
    derecha.style.marginLeft = value* 0.8  + 'px';
    cartel.style.marginBottom = value* -1  + 'px';
    hombre.style.left =  value * -0.5 + 'px';
    mujer.style.marginLeft = value* 0.5  + 'px';
    }
)