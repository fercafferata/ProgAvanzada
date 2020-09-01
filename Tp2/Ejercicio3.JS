var inputName = document.getElementById("inputName");
var inputLastname = document.getElementById("inputLastname");
var inputAddres = document.getElementById("inputAddres");
var inputTelephone = document.getElementById("inputTelephone");
var inputEmail = document.getElementById("inputEmail");
var buttonSubmit = document.getElementById("buttonSubmit");
var buttonCancel = document.getElementById("buttonCancel");
var formulario = document.getElementById("Formulario");

buttonSubmit.addEventListener("click", validar)
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


function validar() {
    if (inputName.value.trim().length != 0 && inputLastname.value.trim().length != 0 && inputAddres.value.trim().length != 0 
        && inputTelephone.value.trim().length != 0 && inputEmail.value.trim().length != 0) {
            swal("Su formulario ha sido envidado con exito!", {
                icon: "success",
                buttons: 'ok'
            })
    }
    else {
        swal("Todos los campos deben ser completados completados", {
            icon: "warning",
            buttons: "ok"
        });
    }
}