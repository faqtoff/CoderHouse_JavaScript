let operacion = prompt(`Elija los productos, utilizando el Numero y separando por ; 1 - CocaCola, 2 - Soda, 3 - Agua Mineral:`)

while (operacion === '' ){
    operacion = prompt(`OPCION INCORRECTA. Elija los productos, utilizando el Numero y separando por ; 1 - CocaCola, 2 - Soda, 3 - Agua Mineral: `)
}

let precios = {
    '1': 200,
    '2': 150,
    '3': 100
}

let seleccion = operacion.split(';')

let aPagar = 0
seleccion.forEach(element => {
    aPagar+= precios[element]
});

alert(`A pagar: ${aPagar}`)