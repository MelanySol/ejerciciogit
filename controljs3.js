const form = document.getElementById("form");
const input = document.querySelectorAll("#form input")
const expresions = {
    usuario: /@/,
    clave:  /(.|\s)*\S(.|\s)*/ //no empty.
}

const campos = {
    user: false,
    pass: false
}

const validarCampo = (expresions, input, campo) => {
    if(expresions.test(input.value)){
        document.getElementById(`group__${campo}`).classList.remove("form__group-incorrect");
        document.getElementById(`group__${campo}`).classList.add("form__group-correct");
        document.querySelector(`#group__${campo} i`).classList.remove("fa-times-circle")
        document.querySelector(`#group__${campo} i`).classList.add("fa-check-circle")
        document.querySelector(`#group__${campo} .form__input-error`).classList.remove("form__input-error-active");
        campos[campo] = true;
    } else {
        document.getElementById(`group__${campo}`).classList.add("form__group-incorrect");
        document.getElementById(`group__${campo}`).classList.remove("form__group-correct");
        document.querySelector(`#group__${campo} i`).classList.remove("fa-check-circle")
        document.querySelector(`#group__${campo} i`).classList.add("fa-times-circle");
        document.querySelector(`#group__${campo} .form__input-error`).classList.add("form__input-error-active");
        campos[campo] = false;
    }
}

const ValidarFormulario = (e) => {
    switch (e.target.name) {
        case "usuario":
            validarCampo(expresions.usuario, e.target, "user");
        break;
        case "clave":
            validarCampo(expresions.clave, e.target, "pass");
        break;
    }
}

input.forEach((input) => {
    input.addEventListener("keyup", ValidarFormulario);
    input.addEventListener("blur", ValidarFormulario);
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if(campos.user && campos.pass){
		form.reset();
        document.querySelectorAll(".form__group-correct").forEach((icono) => {
            icono.classList.remove("form__group-correct");
        })
        alert("Se envió con éxito!")
    } else {
        document.getElementById("form__message").classList.add("form__menssage-active");
    }
});
