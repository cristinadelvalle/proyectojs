const contenedorTarjetas = document.getElementById("productos-container");

function crearTarjetasProductosInicio(productos) {
  productos.forEach((producto) => {
    const nuevaRemera = document.createElement("div");
    nuevaRemera.classList = "tarjeta-producto";
    nuevaRemera.innerHTML = `
    <img src="../img/productos/${producto.id}.jpg" alt="${producto.id} ">
    <h3>${producto.nombre}</h3>
    <p class="precio">$${producto.precio}</p>
    <button id="toastify"> Agregar al carrito</button>
    <button id="toastify">Comprar</button>`;

    contenedorTarjetas.appendChild(nuevaRemera);
    nuevaRemera
      .getElementsByTagName("button")[0]
      .addEventListener("click", () => agregarAlCarrito(producto));
  });
}
crearTarjetasProductosInicio(remeras);

const toastify = document.querySelector("#toastify");

toastify.addEventListener("click", () => {
  Toastify({
    text: "Agregaste un producto al carrito",
    className: "info",
    duration: 2000,
    style: {
      background: "rgb(191, 0, 0)",
    },
  }).showToast();
});

const jeans = document.querySelector("#jeans");

fetch("./js/jeans.json")
  .then((res) => res.json())
  .then((data) => {
    console.table(data);
    data.forEach((producto) => {
      const nuevoJean = document.createElement("div");

      nuevoJean.classList = "tarjeta-producto";
      nuevoJean.innerHTML = ` 
    <img src="../img/productos/${producto.id}.jpg" alt="${producto.id} ">
    <h3>${producto.nombre}</h3>
    <p class="precio">$${producto.precio}</p>
    <button id="toastify"> Agregar al carrito</button>
    <button id="toastify">Comprar</button>`;
      document.createElement("section");

      contenedorTarjetas.appendChild(nuevoJean);
      nuevoJean
        .getElementsByTagName("button")[0]
        .addEventListener("click", () => agregarAlCarrito(producto));
    });
  });
  
crearTarjetasProductosInicio(jeans);
