const nameInput = document.getElementById("yourName");
const eMailInput = document.getElementById("eMail");
const razon = document.getElementById("razon");
const mensaje = document.getElementById("mensaggem");
const enviar = document.getElementById("send");

const nameError = document.getElementById("nameError");
const eMailError = document.getElementById("eMailError");
const razonError = document.getElementById("razonError");
const mensajeError = document.getElementById("charError");
const charCount = document.getElementById("charCount");

//validar formulario//
 function validateForm() 
 {
    let isValid = true;
        //validar nombre//
    const name = nameInput.value.trim();
    if (name ==="") {
        nameError.textContent = "El campo nombre no debe estar en blanco.";
        isValid = false;
    } else if (name.length > 50) {
        nameError.textContent = "El campo nombre no debe tener mas de 50 caracteres.";
        isValid = false;
    } else {
        nameError.textContent = "";
    }
        //validar email//
    const email = eMailInput.value.trim();
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (email === "") {
        eMailError.textContent = "El formato del correo no debe estar en blanco.";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        eMailError.textContent = "El formato del correo no es valido.";
        isValid = false;
    }  else {
        eMailError.textContent = "";
    }
        //validar asunto//
    const subject = razon.value.trim();
    if (subject ==="") {
        razonError.textContent = "El campo asunto no debe estar en blanco.";
        isValid = false;
    }  else if (razon.length > 50) {
        razonError.textContent = "El campo asunto no debe exceder los 50 caracteres.";
        isValid = false;
    } else{
        razonError.textContent = "";
    }
        //validar mensaje//
    const message = mensaje.value.trim();
    if (message === "") {
        mensajeError.textContent = "Elcampo mensaje no debe estar en blanco."
        isValid = false;
    }else if (message.length > 300) {
        mensajeError.textContent = "El campo de mensaje no debe exceder los 300 caracteres."
        isValid = false;
    }else {
        mensajeError.textContent = "";
    }
        //activar/desactivar boton enviar//
    send.disabled = !isValid;     
}

//contador//
function updatecharcount() {
    const maxLength = 300;
    const currentLength = mensaje.value.length;
        //actualizar contador 0/300//
    charCount.textContent = `${currentLength}/${maxLength}`;
        //limite//
    if (currentLength > maxLength) {
        charCount.textContent = `300/${maxLength}`;
    }  
    validateForm();      
}
//actualizar contador caracteres//
mensaje.addEventListener("input", function() {
    validateForm();
    charCount.textContent = `${mensaje.value.length}/300`;
});
//reiniciar contador despues de enviar el formulario//
document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault();
    validateForm();

    if (!send.disabled) {
        //alert("formulario enviado correctamente");//
        document.getElementById("contacForm").reset();
        send.disabled = true;
        charCount.textContent = "0/300";
    }
});

nameInput.addEventListener("input", validateForm);
eMailInput.addEventListener("input", validateForm);
razon.addEventListener("input", validateForm);
mensaje.addEventListener("input",updatecharcount);

//validar el formulario al enviar//
document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault();
    validateForm();

    if (!send.disabled) {
       alert("formulario enviado correctamente");
        document.getElementById("contactForm").reset();
        send.disabled = true;
    }
});
