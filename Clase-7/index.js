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
    showProducts () {
        let lista = ''
        this.lista.forEach( element => {
            lista += `${element.id} - ${element.titulo}; `
        })
        return lista
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

const productList   = new ProductList
const seleccion     = new ProductList

productList.newProduct('Coca Cola', 200, 4, 1)
productList.newProduct('Lays', 100, 3, 2)
productList.newProduct('Chocolate', 50, 20, 3)

let operacion = ''
while (operacion !== 'x' ) {
    operacion = prompt(`Elija los productos de a uno por el id, al finalizar marque X : `+ productList.showProducts())
    if (productList.getById(operacion)){
        seleccion.newProductFromObject(productList.getById(operacion))
    } 
    else if ( operacion !== 'x' && operacion !== 'X' ) {
        operacion = ''
    }
    while (operacion === '' ){
        operacion = prompt(`OPCION INCORRECTA.Elija los productos de a uno por el id, al finalizar marque X : `+ productList.showProducts())
        if (productList.getById(operacion)){
            seleccion.newProductFromObject(productList.getById(operacion))
        } 
        else {
            operacion = ''
        }
    }
}

const total = seleccion.totalAmount()

let option = prompt(`Subtotal: $${total.aPagar}, IVA = $${total.iva}, TOTAL = $${total.total}. Para ver los productos de menor a mayor precio seleccione 1`)

if ( option === '1' ){
    prompt(seleccion.showProductsByCheaper())
}