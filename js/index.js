const contenedorTarjetas = document.getElementById("productos-container");


function crearTarjetasProductosInicio(productos){
  productos.forEach(producto => {
    const nuevaRemera = document.createElement("div");
    nuevaRemera.classList = "tarjeta-producto"
    nuevaRemera.innerHTML = `
    <img src="./img/productos/${producto.id}.jpg" alt="Remera 1">
    <h3>${producto.nombre}</h3>
    <p class="precio">$${producto.precio}</p>
    <button id="toastify">Agregar al carrito</button>`
    contenedorTarjetas.appendChild(nuevaRemera);
    nuevaRemera.getElementsByTagName("button")[0].addEventListener("click",() => agregarAlCarrito(producto))
  });
}
crearTarjetasProductosInicio(remeras);




const toastify = document.querySelector ("#toastify")

toastify.addEventListener("click", () =>{
  Toastify({
  text: "Agregaste un producto al carrito",
  className: "info",
  duration: 2000,
  style: {
    background: "rgb(191, 0, 0)",
  }
}).showToast();
} )
