// Función para filtrar los productos en el catálogo
function filtrarProductos(categoria) {
    // 1. Obtener todos los productos y botones
    const productos = document.querySelectorAll('.producto-card');
    const botones = document.querySelectorAll('.btn-filtro');

    // 2. Actualizar la clase 'activo' en los botones
    botones.forEach(boton => {
        boton.classList.remove('activo');
        // Si el texto del botón en minúsculas coincide con la categoría, lo activamos
        if(boton.innerText.toLowerCase() === categoria) {
            boton.classList.add('activo');
        } else if (categoria === 'todos' && boton.innerText.toLowerCase() === 'todos') {
            boton.classList.add('activo');
        }
    });

    // 3. Mostrar/Ocultar productos con animación
    productos.forEach(producto => {
        // Hacemos que se desvanezcan antes de ocultarlos para una transición suave
        producto.style.opacity = '0';
        
        setTimeout(() => {
            if (categoria === 'todos') {
                producto.classList.remove('oculto');
                setTimeout(() => producto.style.opacity = '1', 50);
            } else {
                if (producto.dataset.categoria === categoria) {
                    producto.classList.remove('oculto');
                    setTimeout(() => producto.style.opacity = '1', 50);
                } else {
                    producto.classList.add('oculto');
                }
            }
        }, 300); // 300ms de espera sincronizado con la animación CSS
    });
}
