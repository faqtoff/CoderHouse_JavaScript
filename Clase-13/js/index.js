/* Mostrar Lista */
const showProducts = () => {
    $(`#productos`).html('')
    productList.showProducts(`#productos`, {verMas: true, editar: true, agregar:true, eliminar: true})
}
showProducts()
/* Actualizar Stock */
const actualizarStock = (id, cantidad) => {
    // Actualizamos Stock Remanente
    productList.nuevaCompra(id, cantidad)
    localStorage.setItem('products', JSON.stringify(productList.lista))
    showProducts()
}

/* Agregar al carro */
$('.agregar__btn').click(function(){
    const id = $(this).attr("id").split('__')[1]

    const producto = new Producto()
    producto.newProductFromObject(productList.getById(id)) 
    
    const cantidad = prompt(`Selecciono el producto ${id}. Elija Cantidad`)

    if (cantidad <= producto.stock) {

        if(seleccion.isInLista(id)){
            console.log('Esta en lista')
            // Agregamos al carro
            seleccion.nuevaCompra(id, parseInt(cantidad), true)
            localStorage.setItem('carrito', JSON.stringify(seleccion.lista))
            alert('Producto agregado correctamente')
            
            // Actualizamos Stock Remanente
            actualizarStock(id, cantidad)
        }
        else {
            // Agregamos al carro
            producto.stock = parseInt(cantidad)
            seleccion.newProductFromObject(producto)
            localStorage.setItem('carrito', JSON.stringify(seleccion.lista))
            alert('Producto agregado correctamente')

            // Actualizamos Stock Remanente
            actualizarStock(id, cantidad)
        }
        window.location.reload()
    } 
    else {
        alert ('No hay stock suficiente')
    }
})
  
    
/* Ver Mas */
const verMasBtns = document.querySelectorAll('.verMas__btn')
verMasBtns.forEach(button => {
    button.addEventListener('click', e => {
        let id = e.target.id
        alert(`Ver Mas ${id}`)
    })
})

