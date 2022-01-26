/*====================================================================== CLASES */
class Producto {
    constructor(titulo, precio, stock, id, customSettings, cupones){
        this.id = `${id}`;
        this.titulo = titulo;
        this.precio = precio;
        this.stock = stock;
        this.active = false;
        this.customSettings = customSettings || {};
        this.cupones = cupones
    }
    showPrice () {
        alert(`Valor: $${this.precio}`)
    }
    getPrice () {
        return this.precio
    }
    getFullInfo() {
        alert(`Titulo: ${ this.titulo} Valor: $${this.precio} Stock: ${this.stock}`)
    }
    nuevaCompra() {
        if (this.stock > 0) {
            this.stock -= 1
        }
        else {
            alert(`El producto ${this.titulo} no tiene Stock`)
        }
    }
}
class ProductList {
    constructor(lista) {
        this.lista = lista || []
    }
    deleteById (id) {
        return console.log(this.lista.find( element => element.id === id))
    }
    newProduct (titulo, precio, stock, id, customSettings) {
        this.lista.push(new Producto(titulo, precio, stock, id, customSettings))
    }
    newProductFromObject (object) {
        this.lista.push(new Producto(object.titulo, object.precio, object.stock, object.id, object.customSettings))
    }
    importProductList (array) {
        array.forEach( object => {
            this.lista.push(new Producto(object.titulo, object.precio, object.stock, object.id, object.customSettings))
        })
    }
    showProducts (padre, containerTag, options) {
        for (const producto of this.lista) {
            let contenedor = document.createElement(containerTag);
            contenedor.innerHTML = `
                <h3>${producto.titulo}</h3> 
                <p>ID: ${producto.id}</p>
                <span>$${producto.precio}</span>
            `
            if (options.verMas) {
                contenedor.innerHTML += `<button class='verMas__btn' id='${producto.id}'>Ver Mas</button>`
            }
            if (options.agregar) {
                contenedor.innerHTML += `<button class='agregar__btn' id='${producto.id}'>Agregar</button>`
            }
            if (options.editar) {
                contenedor.innerHTML += `<button class='editar__btn' id='${producto.id}'>Editar</button>`
            }
            if (options.eliminar) {
                contenedor.innerHTML += `<button class='eliminar__btn' id='${producto.id}'>Eliminar</button>`
            }
            padre.appendChild(contenedor)
        }
    }
    getByName (name) {
        return this.lista.filter( element => element.titulo = name)
    }
    getById (id) {
        return this.lista.find( element => element.id === id)
    }
    showProductsByCheaper () {
        let text = ''
        let lista = this.lista.sort((a,b) => {
            return a.getPrice() - b.getPrice()
        })
        lista.forEach( element => {
            text += `${element.id} - ${element.titulo}; `
        })
        return text
    }
    showProductsByExpensive () {
        let text = ''
        let lista = this.lista.sort((a,b) => {
            return b.getPrice() - a.getPrice()
        })
        lista.forEach( element => {
            text += `${element.id} - ${element.titulo}; `
        })
        return text
    }
    totalAmount () {
        let aPagar = 0
        this.lista.forEach(element => {
            aPagar+= parseFloat(element.getPrice())
        })
        let iva = aPagar * 0.21
        let total = aPagar + iva
        return {aPagar, iva, total}
    }
}
/*====================================================================== ESTADO INICIAL */
const productList   = new ProductList
const seleccion     = new ProductList

productList.importProductList([
    {titulo:'Coca Cola', precio: 200, stock: 4, id: 1}, 
    {titulo:'Lays', precio: 100, stock: 3, id: 2},
    {titulo:'Chocolate', precio: 50, stock: 20, id: 3}
])

/*====================================================================== FUNCIONES */
/* Mostrar Lista */
const productos = document.querySelector(`#productos`)
productList.showProducts(productos, 'li', {verMas: true, editar: true})
/* Agregar al carro */
const newToCart = document.querySelector('#newToCart')
newToCart.addEventListener('click', () => {
    console.log("click")
    const operacion = prompt(`Elija un producto`)

    if (productList.getById(operacion)){
        seleccion.newProductFromObject(productList.getById(operacion))
    } 

    /* SUBTOTAL */
    const subtotal = document.querySelector('#subtotal')
    subtotal.innerHTML = `SubTotal: $${seleccion.totalAmount().aPagar}`

    /* IVA */
    const iva = document.querySelector('#iva')
    iva.innerHTML = `IVA (21%): $${seleccion.totalAmount().iva}`

    /* TOTAL */
    const total = document.querySelector('#total')
    total.innerHTML = `TOTAL: $${seleccion.totalAmount().total}`

    const carrito = document.querySelector(`#cart`)
    seleccion.showProducts(carrito, 'li', {eliminar: true})

    /*  Eliminar */
    const eliminarBtns = document.querySelectorAll('.eliminar__btn')
    eliminarBtns.forEach(button => {
        button.addEventListener('click', e => {
            let id = e.target.id
            alert(`Eliminar ${id}`)
        })
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

