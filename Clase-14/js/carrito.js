/* Mostrar Lista */
const showProducts = () => {
    $(`#productos`).html('')
    seleccion.showProducts(`#productos`, {verMas: true, editar: true, agregar:true, eliminar: true})
}
showProducts()