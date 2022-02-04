/*====================================================================== ESTADO INICIAL */
const form = document.querySelector('#newProduct')

form.addEventListener('submit', e => {
    e.preventDefault();

    const id = parseInt( e.target.id.value )|| null
    const titulo = e.target.titulo.value  || null
    const precio = parseFloat(e.target.precio.value)  || null
    const stock = parseInt( e.target.stock.value)  || null
    
    if(id && titulo && precio && stock) {
        if ( !productList.isInLista(e.target.id.value) ){
            productList.newProductFromObject({id, titulo, precio, stock})
            localStorage.setItem('products', JSON.stringify(productList.lista))
        }
        else {
            alert('Ya existe un producto con esta id')
        }
    }

})