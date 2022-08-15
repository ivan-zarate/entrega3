class Producto {
    constructor(tipo, nombre, talle, precio) {
        this.tipo = tipo.toUpperCase();
        this.nombre = nombre.toUpperCase();
        this.talle = talle.toUpperCase();
        this.precio = parseFloat(precio);
    }
}

function productosCarrito(productos, nombre) {
    return productos.filter(objeto => objeto.nombre == nombre.toUpperCase());
}


function listaProductos(objeto) {
    let lista = '';
    for (const productos of objeto) {
        lista += 'TIPO ' + productos.tipo + ' NOMBRE ' + productos.nombre + ' TALLE ' + productos.talle + ' PRECIO ' + productos.precio + '\n';
    }
    return lista;
}