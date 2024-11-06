document.addEventListener('DOMContentLoaded', function() {
    let producto = document.getElementById('producto');
    let cantidad = document.getElementById('cantidad');
    let precioUnitario = document.getElementById('precio-unitario');
    let descuento = document.getElementById('descuento');
    let agregarLinea = document.getElementById('agregarLinea');
    let cuerpoTabla = document.getElementById('cuerpo-tabla');

    // Función para agregar la línea a la tabla
    function agregarLineaTabla() {
        // Crear nueva fila
        let nuevaFila = document.createElement('tr');
        
        // Agregar las celdas con los valores del formulario
        let celdaProducto = document.createElement('td');
        celdaProducto.textContent = producto.value;
        nuevaFila.appendChild(celdaProducto);

        let celdaCantidad = document.createElement('td');
        celdaCantidad.textContent = cantidad.value;
        nuevaFila.appendChild(celdaCantidad);

        let celdaPrecio = document.createElement('td');
        celdaPrecio.textContent = precioUnitario.value;
        nuevaFila.appendChild(celdaPrecio);

        let celdaDescuento = document.createElement('td');
        celdaDescuento.textContent = descuento.value;
        nuevaFila.appendChild(celdaDescuento);

        let celdaBoton = document.createElement('td');
        let botonAgregar = document.createElement('a');
        botonAgregar.href = "#";
        botonAgregar.className = "btn btn-success";
        botonAgregar.textContent = "Agregar";
        celdaBoton.appendChild(botonAgregar);
        nuevaFila.appendChild(celdaBoton);

        // Agregar la nueva fila al cuerpo de la tabla
        cuerpoTabla.appendChild(nuevaFila);

        producto.value = '';
        cantidad.value = '';
        precioUnitario.value = '';
        descuento.value = '';
    }

    // Asignar el evento al botón Agregar
    agregarLinea.addEventListener('click', function(event) {
        event.preventDefault(); // Evitar el comportamiento predeterminado (recargar página)
        agregarLineaTabla(); // Llamar a la función para agregar la nueva línea
    });
});
