class Producto {
    constructor(titulo, precio, stock, id, customSettings, cupones){
        this.id = `${id}`;
        this.titulo = titulo;
        this.precio = precio;
        this.stock = stock;
        this.active = false;
        this.customSettings = customSettings || {};
        this.cupones = cupones || []
    }
    newProductFromObject (object) {
        this.id = object.id;
        this.titulo = object.titulo;
        this.precio = object.precio;
        this.stock = object.stock;
        this.customSettings = object.customSettings || {};
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
    nuevaCompra(cant) {
        if (this.stock >= cant) {
            this.stock -= cant
        }
        else {
            alert(`El producto ${this.titulo} no tiene Stock`)
        }
    }
    agregarAlStock(cant) {
        this.stock += cant
    }
}