window.onload = function() {
    let botonAgregar = document.querySelector('.boton-formulario');
    
    botonAgregar.addEventListener('click', function(){
        
        let imagen = document.querySelector('.producto img').getAttribute("src")
        let tituloProd = document.querySelector('h1').innerText
        let precio = document.querySelector('.precio').innerText
        let descuento = document.querySelector('.descuento').innerText

        let producto = {
            imagen,
            tituloProd,
            precio,
            descuento
        }

        if(localStorage.length == 0) {
            let carrito = []
            carrito.push(producto)
            localStorage.setItem("carrito", JSON.stringify(carrito))
        }

    })
}