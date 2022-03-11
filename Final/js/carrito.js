/* Mostrar Lista */
$(`#productos`).html('')
seleccion.showProducts(`#productos`, {eliminar: true})

/* Eliminar */
const eliminarBtns = document.querySelectorAll('.eliminar__btn')
eliminarBtns.forEach(button => {
    button.addEventListener('click', e => {
        let id = e.target.id.split('__')[1]
        if (id != ''){
            localStorage.setItem('carrito', JSON.stringify(seleccion.deleteById(id)))
            window.location.reload()
        }
    })
})