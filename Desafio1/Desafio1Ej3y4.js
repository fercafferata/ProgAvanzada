let nombre = prompt('Ingrese su nombre');
let sexo = prompt('Ingrese su sexo (Femenino o Masculino)');
let edad = prompt('Ingrese su edad');

sexo.toUpperCase();

if (sexo === 'Femenino'){
    if(edad > 59){
        console.Log(nombre + ' sne encuentra en edad jubilatoria');
    }
    else{
        console.log(nombre + ' no se encuentra en edad jubilatoria');
    }
}

else {
    if(edad > 64){
        console.log(nombre + ' se encuentra en edad jubilatoria');
    }
    else{
        console.log(nombre + ' no se encuentra en edad jubilatoria');
    }
}