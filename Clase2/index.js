let operacion = prompt(`Seleccione la operacion. 1 - Suma; 2 - Resta; 3 - Multiplicacion; 4 - Division`)


let valor1 = parseInt(prompt('Ingrese primer numero'));
let valor2 = parseInt(prompt('Ingrese segundo numero'));
if (operacion == '1') {
    let suma = valor1 + valor2;
    alert('La suma de '+valor1+' y '+valor2+' es: '+suma);
}
else if ( operacion == '2'){
    let resta = valor1 - valor2;
    alert('La resta de '+valor1+' y '+valor2+' es: '+resta);
}
else if (operacion == '3'){
    let producto = valor1 * valor2;
    alert('El producto de '+valor1+' y '+valor2+' es: '+producto);
}
else if (operacion == '4'){
    let producto = valor1 / valor2;
    alert('La division de '+valor1+' y '+valor2+' es: '+producto);
}
else {
    alert('La opcion no es correcta')
}