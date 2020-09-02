var ingresarNombre = document.getElementById("ingresarNombre");
var ingresarApellido = document.getElementById("ingresarApellido");
var ingresarDireccion = document.getElementById("ingresarDireccion");
var ingresarTelefono = document.getElementById("ingresarTelefono");
var ingresarEmail = document.getElementById("ingresarEmail");
var buttonSubmit = document.getElementById("buttonSubmit");
var buttonCancel = document.getElementById("buttonCancel");
var campos = document.getElementById("Campos");

buttonSubmit.addEventListener("click", validacion)
buttonCancel.addEventListener("click", Cancelar)


function Cancelar() {
    swal({
                title: "Está seguro que desea cancelar?",
                text: "Una vez cancelado se perderan todos los datos",
                icon: "warning",
                buttons:{
                    confirm: {
                        text: "Si",
                        value: true
                    }
                }
        });
}


function validacion() {
    if (ingresarNombre.value.trim().length != 0 && ingresarApellido.value.trim().length != 0 && ingresarDireccion.value.trim().length != 0 
        && ingresarTelefono.value.trim().length != 0 && ingresarEmail.value.trim().length != 0) {
            swal("Su formulario ha sido envidado con exito!", {
                icon: "success",
                buttons: 'ok'
            })
    }
    else {
        swal("Todos los campos deben ser completados", {
            icon: "warning",
            buttons: "ok"
        });
    }
}