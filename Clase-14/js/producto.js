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
            alert('Ya existe un producto con esta id')
        }
    }
})