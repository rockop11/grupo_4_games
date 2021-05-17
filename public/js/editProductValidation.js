window.onload = function(){
    let formulario = document.querySelector('.form-user');

    formulario.addEventListener('submit', (e) => {
        let errors = [];

        let nombre = document.getElementById("name");
        let description = document.querySelector("#description");
        let price = document.querySelector("#price");

        if(nombre.value == '') {
            errors.push('El campo "Nombre" está vacío');
            nombre.classList.add('is-invalid');
        } else {
            nombre.classList.add('is-valid');
            nombre.classList.remove('is-invalid');
            formulario.description.focus();
        }

        if(description.value == '') {
            errors.push('El campo "Descripción" está vacío');
            description.classList.add('is-invalid');
        } else {
            description.classList.add('is-valid');
            description.classList.remove('is-invalid')
            formulario.price.focus();
        }

        if(price.value == '') {
            errors.push('El campo "Precio" está vacío');
            price.classList.add('is-invalid');
        } else {
            price.classList.add('is-valid');
            price.classList.remove('is-invalid')
            formulario.descuento.focus();
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