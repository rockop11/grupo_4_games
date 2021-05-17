window.onload = function() {
    let formulario = document.querySelector('.form-user');

    formulario.addEventListener('submit', (e) => {

        let errors = []

        let mail = document.querySelector("#usuario");
        let password = document.querySelector("#clave");

        if(mail.value == '') {
            errors.push('El campo "Email" está vacío');
            mail.classList.add('is-invalid');
        } else {
            mail.classList.add('is-valid');
            mail.classList.remove('is-invalid');
            formulario.password.focus();
        }

        if(password.value == '') {
            errors.push('El campo "Contraseña" está vacío');
            password.classList.add('is-invalid');
        } else {
            password.classList.add('is-valid');
            password.classList.remove('is-invalid');
            formulario.password.focus();
        }

        if(errors.length > 0) {
            e.preventDefault();
            let ulErrors = document.querySelector('.errores');
            ulErrors.classList.add('alert-warning');
            ulErrors.innerHTML = '';
            for (let i = 0; i < errors.length; i++) {
                ulErrors.innerHTML += `<li >  ${errors[i]} </li>`;
            };
        }else{
            // alert('La validación fué exitosa')
            formulario.submit();
        }

    })
    
}