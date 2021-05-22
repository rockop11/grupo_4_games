window.onload = function(){
    if(typeof localStorage.carrito == 'undefined' || typeof localStorage.carrito == "[]"){
        let div = document.getElementById("vacio");
        console.log(div)
        div.innerHTML += "<h2>No hay productos agregados </h2>"
    } else {
        let carrito = JSON.parse(localStorage.carrito)
        for ( let i = 0; i < carrito.length; i++){
            let producto = carrito[i]
            let div = document.querySelector('.vacio');
            let contenido = ` <section class="checkout-cart">
            <article class="item-cart">
                <form action="#" method="GET">
                    <button type="button">
                        <i class="fas fa-times"></i>
                    </button>
                </form>
                <div class="img-cart"><img src=${producto.imagen} alt=""> </div>
                <div class="descripcion-cart">${producto.tituloProd}</div>
                <div class="precio-cart"> ${producto.precio}</div>
            </article>
            <article class="cant-cart">
                <form action="#" method="GET">
                    <label for="cantidad">Cantidad:</label>
                    <input class="cant-prod" type="text" name="cantidad" id="cantidad">
                </form>
            </article>
        </section>

        <section class="sumario-cart">
            <h4>Resumen de compra</h4>
            <div class="descuento-cart">
                <p>${producto.descuento} </p>
                <form action="#" method="GET">
                    <label for="descuento">Ingrese código de descuento.
                        <input type="text" name="descuento" id="descuento" placeholder="Ingrese código de descuento">
                    </label>
                </form>
            </div>
            <p>Debido a la emergencia sanitaria, la preparación y entrega de los pedidos pueden verse afectados con una demora extra a lo habitual.</p>
            <div class="totales">
                <div class="titulos">
                    <h5>SUBTOTAL:</h5>
                    <h5>ENVÍO:</h5>
                    <h3>TOTAL:</h3>
                </div>
                <div class="cantidades">
                    <h5>$0</h5>
                    <h5>calcular</h5>
                    <h3>${producto.precio}</h3>
                </div>
            </div>
            <form action="#" method="GET">
                <button type="submit">Iniciar Pago</button>
            </form>
            
            <a href="/products"><button type="submit">Agregar más productos</button></a>
            
        </section>`

        div.innerHTML += contenido
        }
    }
}