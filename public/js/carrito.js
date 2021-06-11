window.onload = function(){
    const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    if(typeof localStorage.carrito == 'undefined' || typeof localStorage.carrito == "[]"){
        let div = document.getElementById("vacio");
        div.innerHTML += "<h2>No hay productos agregados </h2>"
    } else {
        let carrito = JSON.parse(localStorage.carrito)
        for ( let i = 0; i < carrito.length; i++){
            let producto = carrito[i]
            let div = document.querySelector('.vacio');
            let contenido = ` <section class="checkout-cart">
            <article class="item-cart">
                <form action="#" method="GET">
                    <button  type="button">
                        <i onclick="borrarItem(${i})" class="fas fa-times"></i>
                    </button>
                </form>
                <div class="img-cart"><img src=${producto.imagen} alt=""> </div>
                <div class="descripcion-cart">${producto.tituloProd}</div>
                <div class="precio-cart">$ ${toThousand(producto.precio)}</div>
            </article>
            <article class="cant-cart">
                <form action="#" method="GET">
                    <label for="cantidad"></label>
                    <input id="count" value=${producto.inputCantidad} type="text">
                </form>
            </article>
        </section>`

        div.innerHTML += contenido
        }
    }

    if(typeof localStorage.totalCarrito == 'undefined') {
      let divTotales = document.getElementById("total")
      let contenido2 = ` <section class="sumario-cart">
      <h4>Resumen de compra</h4>
    

      <div class="totales">
        <div class="titulos">
          <h3>TOTAL:</h3>
        </div>
        <div class="cantidades">
          <h3>$ 0</h3>
        </div>
      </div>
      <form action="#" method="GET">
        <button type="submit">Iniciar Pago</button>
      </form>

      <a href="/products">
        <button type="submit">Agregar más productos</button>
      </a>
    </section>`

    divTotales.innerHTML += contenido2
    } else {

      let totalCarrito = localStorage.totalCarrito
      let divTotales = document.getElementById("total")
      let contenido2 = ` <section class="sumario-cart">
      <h4>Resumen de compra</h4>
      
  
      <div class="totales">
        <div class="titulos">
          <h3>TOTAL:</h3>
        </div>
        <div class="cantidades">
          <h3>$ ${totalCarrito}</h3>
        </div>
      </div>
      <form action="#" method="GET">
        <button type="submit">Iniciar Pago</button>
      </form>
  
      <a href="/products">
        <button type="submit">Agregar más productos</button>
      </a>
    </section>`
  
    divTotales.innerHTML += contenido2
    }
    
}

function borrarItem(id){
    let carrito = JSON.parse(localStorage.carrito)
    carrito = carrito.filter((producto, i) => {
        return i !== id
    })
    localStorage.setItem("carrito", JSON.stringify(carrito))
    location.reload();
}
