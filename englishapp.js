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
        nameError.textContent = "The name field must not be blank.";
        isValid = false;
    } else if (name.length > 50) {
        nameError.textContent = "The name field must not have more than 50 characters.";
        isValid = false;
    } else {
        nameError.textContent = "";
    }
        //validar email//
    const email = eMailInput.value.trim();
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (email === "") {
        eMailError.textContent = "The email format should not be blank.";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        eMailError.textContent = "The email format is not valid.";
        isValid = false;
    }  else {
        eMailError.textContent = "";
    }
        //validar asunto//
    const subject = razon.value.trim();
    if (subject ==="") {
        razonError.textContent = "the subject field must not be blank.";
        isValid = false;
    }  else if (razon.length > 50) {
        razonError.textContent = "The subject field must not exceed 50 characters.";
        isValid = false;
    } else{
        razonError.textContent = "";
    }
        //validar mensaje//
    const message = mensaje.value.trim();
    if (message === "") {
        mensajeError.textContent = "the message field must not be blank."
        isValid = false;
    }else if (message.length > 300) {
        mensajeError.textContent = "the message field must not exceed 300 characters."
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
        alert("form submitted successfully");
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
       //alert("form submitted successfully");//
        document.getElementById("contactForm").reset();
        send.disabled = true;
    }
});
