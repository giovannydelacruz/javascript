// CONCATENACIÓN Y OPERACIONES CON VARIABLES

let platoElegido = prompt("¿Qué quieres comer hoy?");

// alert("Hoy es un lindo día para comer "+ platoElegido); // Concatenación

let platoPrincipal = 1000;
let bebida = 400;
let totalPedido = platoPrincipal + bebida;

alert("El valor total del pedido es: "+ totalPedido);

let dobleDePrecio = platoPrincipal * 2;
let porciones = 2;
let comensales = 3;

let precioTotal = platoPrincipal * porciones;

let dividirCostos = precioTotal / comensales;

let descuento = 100;

let precioConDescuento = precioTotal - descuento;

let nombre = prompt("Ingresa tu nombre:");
let apellido = prompt("Ingresa tu apellido:");

let nombreCompleto = nombre + " " + apellido;

console.log("Bienvenid@ "+nombreCompleto);
