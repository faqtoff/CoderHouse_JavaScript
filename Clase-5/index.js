class Productos {
    constructor(titulo, precio, stock){
        this.titulo = titulo;
        this.precio = precio;
        this.stock = stock;
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

let productList = [
    new Productos('Coca Cola', 200, 4),
    new Productos('Lays', 100, 3),
    new Productos('Chocolate', 50, 20)
]

let lista = ''
productList.forEach( element => {
    lista += `${productList.indexOf(element)} - ${element.titulo}; `
})

console.log(lista)
let operacion = prompt(`Elija los productos, utilizando el Numero y separando por ; `+ lista )

while (operacion === '' ){
    operacion = prompt(`OPCION INCORRECTA. Elija los productos, utilizando el Numero y separando por ; 1 - CocaCola, 2 - Soda, 3 - Agua Mineral: `)
}

let seleccion = operacion.split(';')

let aPagar = 0
seleccion.forEach(element => {
    console.log(productList[element])
    aPagar+= productList[element].getPrice()
})

let iva = (aPagar * 0.21)

alert(`Subtotal: $${aPagar}, IVA = $${iva}, TOTAL = $${aPagar+iva}`)