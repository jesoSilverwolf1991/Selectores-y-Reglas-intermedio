function validarFormulario() {
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    if (!nombre || !email || !password) {
      alert("Todos los campos son obligatorios. Por favor, rellena los campos vacíos.");
      return false;
    }
  
   
  
    return true;
  }
  
  const registrationForm = document.getElementById("registration-form");
  registrationForm.addEventListener("submit", function (event) {
    if (!validarFormulario()) {
      event.preventDefault(); 
    }
  });
  
