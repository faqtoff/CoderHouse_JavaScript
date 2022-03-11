const path = window.location.search.split('id=')[1]

if (path) {
    const current = productList.getById(path)
    document.getElementById('id').value = current.id
    document.getElementById('titulo').value = current.titulo
    document.getElementById('precio').value = current.precio
    document.getElementById('stock').value = current.stock
}

$('#submitNewProduct').click( e => {
    e.preventDefault();
    
    const id = parseInt( $('#id').val() )|| null
    const titulo = $('#titulo').val() || null
    const precio = parseFloat($('#precio').val())  || null
    const stock = parseInt( $('#stock').val())  || null

    if(id && titulo && precio && stock) {
        if ( !productList.isInLista(id) ){
            productList.newProductFromObject({id, titulo, precio, stock})
            localStorage.setItem('products', JSON.stringify(productList.lista))
        }
        else {
            productList.deleteById(id)
            productList.newProductFromObject({id, titulo, precio, stock})
            localStorage.setItem('products', JSON.stringify(productList.lista))
        }
    }
})