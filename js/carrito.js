/* Mostrar Lista */
const showProducts = () => {
    const productos = document.querySelector(`#productos`)
    productos.innerHTML = ''
    seleccion.showProducts(productos, 'div', {verMas: true, eliminar: true})
}
showProducts()
/* Agregar al carro */
const newToCart = document.querySelectorAll('.agregar__btn')
newToCart.forEach( button => {
    button.addEventListener('click', () => {
        const id = button.id.split('__')[1]

        const producto = new Producto()
        producto.newProductFromObject(productList.getById(id)) 
        const cantidad = prompt(`Selecciono el producto ${id}. Elija Cantidad`)

        if (cantidad <= producto.stock) {

            if(seleccion.isInLista(id)){
                console.log('Esta en lista')
                /* Agregamos al carro */
                seleccion.nuevaCompra(id, parseInt(cantidad), true)
                localStorage.setItem('carrito', JSON.stringify(seleccion.lista))
                alert('Producto agregado correctamente')
                
                /* Actualizamos Stock Remanente */
                productList.nuevaCompra(id, cantidad)
                localStorage.setItem('products', JSON.stringify(productList.lista))
                showProducts()
            }
            else {
                /* Agregamos al carro */
                producto.stock = parseInt(cantidad)
                seleccion.newProductFromObject(producto)
                localStorage.setItem('carrito', JSON.stringify(seleccion.lista))
                alert('Producto agregado correctamente')

                /* Actualizamos Stock Remanente */
                productList.nuevaCompra(id, cantidad)
                localStorage.setItem('products', JSON.stringify(productList.lista))
                showProducts()
            }
            window.location.reload()
        } 
        else {
            alert ('No hay stock suficiente')
        }
    })
})
    
/* Ver Mas */
const verMasBtns = document.querySelectorAll('.verMas__btn')
verMasBtns.forEach(button => {
    button.addEventListener('click', e => {
        let id = e.target.id
        alert(`Ver Mas ${id}`)
    })
})

