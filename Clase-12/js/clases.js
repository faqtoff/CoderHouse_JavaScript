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
            contenedor.classList.add('col--span--12')
            contenedor.classList.add('grid--sm--1')
            contenedor.classList.add('grid--med--2')
            contenedor.classList.add('grid--xl--2')
            let contenido = document.createElement('div');
            contenido.innerHTML = `
                <h3>${producto.titulo}</h3> 
                <p>ID: ${producto.id}</p>
                <p>Disponible: ${producto.stock}</p>
                <span>$${producto.precio}</span>
            `
            let buttons = document.createElement('div');
            buttons.classList.add('grid--4')
            if (options.verMas) {
                buttons.innerHTML += `
                <button class='verMas__btn boton--e bg--primary e--3--terciary' id='vermas__${producto.id}' onClick="console()">
                    <span>Ver Mas</span>
                </button>
                `
            }
            if (options.agregar) {
                buttons.innerHTML += `<button class='agregar__btn boton--e bg--primary e--3--secondary' id='agregar__${producto.id}'><span>Agregar al carro</span></button>`
            }
            if (options.editar) {
                buttons.innerHTML += `<button class='editar__btn boton--e bg--primary e--3--success' id='editar__${producto.id}'><span>Editar</span></button>`
            }
            if (options.eliminar) {
                buttons.innerHTML += `<button class='eliminar__btn boton--e bg--primary e--3--red' id='eliminar__${producto.id}'><span>Eliminar</span></button>`
            }
            contenedor.appendChild(contenido)
            contenedor.appendChild(buttons)
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
    isInLista(id) {
        return this.lista.find( element => element.id === id) ? true : false
    }
    nuevaCompra(id, cant, add) {
        const producto = this.lista.find( element => element.id === id)
        if (add){
            console.log('add')
            producto.agregarAlStock(cant)
        }
        else{
            producto.nuevaCompra(cant)
        }
        this.lista[this.lista.indexOf(producto)] = producto
    }
}