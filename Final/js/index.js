const dolar = JSON.parse(localStorage.getItem('dolar'))
$(`#dolar`).prepend(
    `<div class='card grid--4'>
        <h1>Dolar</h1>
        <h2>Compra $${dolar.oficial.value_buy}</h2>
        <h2>Vernta $${dolar.oficial.value_sell}</h2>
    </div>`
)
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

/* Agregar al carro  Modal*/
$('.agregar__btn').click(function(){
    const id = $(this).attr("id").split('__')[1]

    const producto = new Producto()
    producto.newProductFromObject(productList.getById(id)) 

    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];

    
    modal.style.display = "block";
    span.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
    }

    const form = querySelector('#addToCart')
    form.addEventListener('submit', e => {
        e.preventDefault()
    })
    
    /* const cantidad = prompt(`Selecciono el producto ${id}. Elija Cantidad`)

    */
})

const addToCart = (cantidad) => {
    if (cantidad <= producto.stock && cantidad!= 0) {

        if(seleccion.isInLista(id)){
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
}
  
    
/* Ver Mas */
const verMasBtns = document.querySelectorAll('.verMas__btn')
verMasBtns.forEach(button => {
    button.addEventListener('click', e => {
        let id = e.target.id.split('__')[1]
        if (id != ''){
            window.location.href = `/producto.html?id=${id}`
        }
    })
})

    
/* Editar */
const editarBtns = document.querySelectorAll('.editar__btn')
editarBtns.forEach(button => {
    button.addEventListener('click', e => {
        let id = e.target.id.split('__')[1]
        if (id != ''){
            window.location.href = `/producto.html?id=${id}`
        }
    })
})
    
/* Eliminar */
const eliminarBtns = document.querySelectorAll('.eliminar__btn')
eliminarBtns.forEach(button => {
    button.addEventListener('click', e => {
        let id = e.target.id.split('__')[1]
        if (id != ''){
            localStorage.setItem('products', JSON.stringify(productList.deleteById(id)))
            window.location.reload()
        }
    })
})