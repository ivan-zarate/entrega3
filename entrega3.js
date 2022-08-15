//Cree una pagina que al tocar los botones se desplieguen los productos que contiene y luego se pueda realizar
//una seleccion de los productos a comprar, luego se mostrara por pantalla los productos elegidos y el total a pagar

let elementoProducto;
const carrito = [];
function muestroZapatillas(){
    const productos = [];
    productos.push(new Producto("zapatilla", "z1", "42", "16999"));
    productos.push(new Producto("zapatilla", "z2", "41", "12999"));
    productos.push(new Producto("zapatilla", "z3", "38", "19999"));
    let listadoLi=document.getElementById('listadoZapatillas');
    listadoLi.innerHTML="";
    for(let elementoProducto of productos){
        let nodo=document.createElement('li');
        nodo.innerHTML=`<h5> Nombre: ${elementoProducto.nombre} </h5>
                        <p> Talle: ${elementoProducto.talle} </p>
                        <p> Precio: ${elementoProducto.precio} </p>
                        <button class="comprar" type ="button" onclick="sumarCarrito(elementoProducto)"> Comprar </button>`;
        listadoLi.appendChild(nodo);
    }
}
function muestroRemeras(){
    const productos = [];
    productos.push(new Producto("remera", "r1", "S", "5399"));
    productos.push(new Producto("remera", "r2", "M", "6399"));
    productos.push(new Producto("remera", "r3", "xS", "4399"));
    let listadoLi=document.getElementById('listadoRemeras');
    listadoLi.innerHTML="";
    for(let elementoProducto of productos){
        let nodo=document.createElement('li');
        nodo.innerHTML=`<h5> Nombre: ${elementoProducto.nombre} </h5>
                        <p> Talle: ${elementoProducto.talle} </p>
                        <p> Precio: ${elementoProducto.precio} </p>
                        <button class="comprar" type ="button" onclick="sumarCarrito(elementoProducto)"> Comprar </button>`;
        listadoLi.appendChild(nodo);
    } 
}
function muestroPantalones(){
    const productos = [];
    productos.push(new Producto("pantalon", "p1", "M", "7200"));
    productos.push(new Producto("pantalon", "p2", "L", "9100"));
    productos.push(new Producto("pantalon", "p3", "M", "12249"));
    let listadoLi=document.getElementById('listadoPantalones');
    listadoLi.innerHTML="";
    for(let elementoProducto of productos){
        let nodo=document.createElement('li');
        nodo.innerHTML=`<h5> Nombre: ${elementoProducto.nombre} </h5>
                        <p> Talle: ${elementoProducto.talle} </p>
                        <p> Precio: ${elementoProducto.precio} </p>
                        <button class="comprar" type ="button" onclick="sumarCarrito(elementoProducto)"> Comprar </button>`;
        listadoLi.appendChild(nodo);
    } 
}
function muestroCamisas(){
    const productos = [];
    productos.push(new Producto("camiseta", "c1", "L", "11000"));
    productos.push(new Producto("camiseta", "c2", "S", "8000"));
    productos.push(new Producto("camiseta", "c3", "xL", "12000"));
    let listadoLi=document.getElementById('listadoCamisas');
    listadoLi.innerHTML="";
    for(let elementoProducto of productos){
        let nodo=document.createElement('li');
        nodo.innerHTML=`<h5> Nombre: ${elementoProducto.nombre} </h5>
                        <p> Talle: ${elementoProducto.talle} </p>
                        <p> Precio: ${elementoProducto.precio} </p>
                        <button class="comprar" type ="button" onclick="sumarCarrito(elementoProducto)"> Comprar </button>`;
        listadoLi.appendChild(nodo);
    } 
}
function muestroAccesorios(){
    const productos = [];
    productos.push(new Producto("accesorio", "a1", "-", "300"));
    productos.push(new Producto("accesorio", "a2", "-", "1200"));
    productos.push(new Producto("accesorio", "a3", "-", "9000"));
    let listadoLi=document.getElementById('listadoAccesorios');
    listadoLi.innerHTML="";
    for(elementoProducto of productos){
        let nodo=document.createElement('li');
        nodo.innerHTML=`<h5> Nombre: ${elementoProducto.nombre} </h5>
                        <p> Talle: ${elementoProducto.talle} </p>
                        <p> Precio: ${elementoProducto.precio} </p>
                        <button class="comprar" type ="button" onclick="sumarCarrito(elementoProducto)"> Comprar </button>`;
        listadoLi.appendChild(nodo);
    }

}
//     //carrito

//Proceso de carga del carrito
function sumarCarrito(){
    let compras=document.getElementById('footer');
    compras.innerHTML="";
    let nodo=document.createElement('div');
    nodo.innerHTML=`<h5> Carrito </h5>`
    compras.appendChild(nodo);
    carrito.push(elementoProducto);
    console.log(carrito);
}
