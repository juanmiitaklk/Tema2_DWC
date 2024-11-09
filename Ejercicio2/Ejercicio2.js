"use strict";


// Funcion que recoge los valores de los inputs y los muestra en la consola
function mostrarValores() {
  const producto = document.getElementById("producto").value;
  const cantidad = document.getElementById("cantidad").value;
  const precioUnitario = document.getElementById("precio-unitario").value;
  const descuento = document.getElementById("descuento").value;

  console.log("Producto:", producto);
  console.log("Cantidad:", cantidad);
  console.log("Precio unitario:", precioUnitario);
  console.log("Descuento:", descuento);
}

// Asignar la funcion mostrarValores al evento click del botón "Agregar"
document.getElementById("agregarLinea").addEventListener("click", function(event) {
  event.preventDefault();  // Evitar que el enlace recargue la página
  mostrarValores();
});
