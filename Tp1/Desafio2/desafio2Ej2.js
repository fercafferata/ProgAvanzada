
const b = prompt('Ingrese la base del triangulo: ');
const h = prompt('Ingrese la altura del triangulo: ');

function Area(base, altura){
    total = (base*altura)/2;
    console.log('El area del triangulo es: ' + total);
}

Area(b, h);