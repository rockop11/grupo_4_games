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
            errors.push('El campo "Nombre" está vacío');
            nombre.classList.add('is-invalid');
        } else {
            nombre.classList.add('is-valid');
            nombre.classList.remove('is-invalid');
            formulario.email.focus();
        }

        if(email.value == '') {
            errors.push('El campo "E-mail" está vacío');
            email.classList.add('is-invalid');
        } else {
            email.classList.add('is-valid');
            email.classList.remove('is-invalid');
            formulario.password.focus();
        }

        if(password.value == '') {
            errors.push('El campo "Contraseña" está vacío');
            password.classList.add('is-invalid');
        } else {
            password.classList.add('is-valid');
            password.classList.remove('is-invalid');
            formulario.address.focus();
        }

        if(address.value == '') {
            errors.push('El campo "Direccion" está vacío');
            address.classList.add('is-invalid');
        } else {
            address.classList.add('is-valid');
            address.classList.remove('is-invalid');
            formulario.location.focus();
        }

        if(location.value == '') {
            errors.push('El campo "Localidad" está vacío');
            location.classList.add('is-invalid');
        } else {
            location.classList.add('is-valid');
            location.classList.remove('is-invalid');
            formulario.postalCode.focus();
        }

        if(postalCode.value == '') {
            errors.push('El campo "Codigo Postal" está vacío');
            postalCode.classList.add('is-invalid');
        } else {
            postalCode.classList.add('is-valid');
            postalCode.classList.remove('is-invalid');
            formulario.phone.focus();
        }

        if(phone.value == '') {
            errors.push('El campo "Telefono" está vacío');
            phone.classList.add('is-invalid');
        } else {
            phone.classList.add('is-valid');
            phone.classList.remove('is-invalid');
            formulario.nombre.focus();
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