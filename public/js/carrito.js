window.onload = function(){
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
                <div class="precio-cart"> ${producto.precio}</div>
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
}

function borrarItem(id){
    let carrito = JSON.parse(localStorage.carrito)
    carrito = carrito.filter((producto, i) => {
        return i !== id
    })
    localStorage.setItem("carrito", JSON.stringify(carrito))
    location.reload();
}
