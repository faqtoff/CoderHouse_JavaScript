/*====================================================================== ESTADO INICIAL */
const productList   = new ProductList
const seleccion     = new ProductList
const initalProducts = [
    {titulo:'Coca Cola', precio: 200, stock: 4, id: 1}, 
    {titulo:'Lays', precio: 100, stock: 3, id: 2},
    {titulo:'Chocolate', precio: 50, stock: 20, id: 3}
]
/* Dolar */
fetch('https://api.bluelytics.com.ar/v2/latest')
.then(function(response) {
  return response.json();
})
.then(function(json) {
    console.log(json.oficial.value_sell)
    localStorage.setItem('dolar', JSON.stringify(json))
});

/* Stock Local */
const localProducts = JSON.parse(localStorage.getItem('products'))
if (localProducts) {
    productList.importProductList(localProducts)
}
else{
    localStorage.setItem('products', JSON.stringify(initalProducts))
    productList.importProductList(initalProducts)
}
/* Seleccion Local */
const localSelection = JSON.parse(localStorage.getItem('carrito'))
if (localSelection) {
    seleccion.importProductList(localSelection)
}
else{
    seleccion.importProductList([])
}
