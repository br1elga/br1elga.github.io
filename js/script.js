let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

function agregarAlCarrito(producto, precio) {
    carrito.push({ producto, precio });
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarCarrito();
}

function eliminarDelCarrito(productoAEliminar) {
    carrito = carrito.filter(item => item.producto !== productoAEliminar);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarCarrito();
}

function actualizarCarrito() {
    const carritoElement = document.getElementById('carrito');
    carritoElement.innerHTML = '<h2>Carrito de compras</h2>';
    carrito.forEach(item => {
        carritoElement.innerHTML += `
            <p>${item.producto} - $${item.precio} 
            <button onclick="eliminarDelCarrito('${item.producto}')">Eliminar</button></p>`;
    });
}

window.onload = actualizarCarrito;
