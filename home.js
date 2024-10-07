let contadorCarrito = 0;
let carrito = [];

const mostrarContador = document.getElementById('contadorCarrito');
const botonesAgregar = document.querySelectorAll('.boton-agregar');

botonesAgregar.forEach(boton =>{
    boton.addEventListener('click', function() {
        const producto = this.getAttribute('data-producto');
        const precio = this.getAttribute('data-precio');

        carrito.push({producto, precio});
        contadorCarrito++;
        mostrarContador.textContent = contadorCarrito;

        localStorage.setItem('carrito', JSON.stringify(carrito))
    })
});

window.onload = function(){
    const carritoGuardado = (localStorage.getItem('carrito') || []);

    if (carritoGuardado.length > 0){
        carrito = carritoGuardado;
        contadorCarrito = carrito.length;
        mostrarContador.textContent = contadorCarrito;
    }
}