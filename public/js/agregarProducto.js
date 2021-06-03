window.onload = function() {
    let botonAgregar = document.querySelector('.boton-formulario-shop');
    
    botonAgregar.addEventListener('click', function(){

        //capturamos la URL del producto
        let url = window.location.href.split("/");
        
        let id = url [url.length -1]
        
        let imagen = document.querySelector('.producto img').getAttribute("src")
        let tituloProd = document.querySelector('h1').innerText
        let precio = document.querySelector('.precio').innerText
        let descuento = document.querySelector('.descuento').innerText
        let inputCantidad = document.querySelector('#count').value

        let producto = {
            idProducto: id, 
            imagen,
            tituloProd,
            precio,
            descuento,
            inputCantidad
        }

        if(localStorage.length == 0) {
            let carrito = []
            carrito.push(producto)
            localStorage.setItem("carrito", JSON.stringify(carrito))
        } else {
            let carrito = JSON.parse(localStorage.carrito)
            let arrayProductos = carrito.filter(function(producto){
                return producto.idProducto == id
            })

            if(arrayProductos.length == 0){
                carrito.push(producto)
                localStorage.setItem("carrito", JSON.stringify(carrito))
            } else {
                arrayProductos[0].inputCantidad == parseInt(arrayProductos[0].inputCantidad)+1;
                localStorage.setItem("carrito", JSON.stringify(carrito))
            }
        }

    })
}