window.onload = function(){
    let formulario = document.querySelector('form');

    formulario.addEventListener('submit', (e) => {

        let errors = [];

        let nombre = document.getElementById("fullName");
        let email = document.querySelector("#email");
        let password = document.querySelector("#password");
        let address = document.querySelector("#address");
        let location = document.querySelector("#location");
        let postalCode = document.querySelector("#postalCode");
        let phone = document.querySelector("#phone");
        

        if(nombre.value == '') {
            errors.push('El campo está vacío');
            nombre.classList.add('is-invalid');
        } else {
            nombre.classList.add('is-valid');
            nombre.classList.remove('is-invalid')
            formulario.email.focus();
        }

        if(email.value == '') {
            errors.push('El campo está vacío');
            email.classList.add('is-invalid');
        } else {
            email.classList.add('is-valid');
            email.classList.remove('is-invalid')
            formulario.password.focus();
        }

        if(password.value == '') {
            errors.push('El campo está vacío');
            password.classList.add('is-invalid');
        } else {
            password.classList.add('is-valid');
            password.classList.remove('is-invalid')
            formulario.address.focus();
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
            alert('La validación fué exitosa')
            formulario.submit();
        }
        
    })

}