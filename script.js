"use strict"
//Creamos un nuevo elemento div
let nuevoElemento = document.createElement("div");

//agregar contenido al nuevo elemento div 
nuevoElemento.textContent = "Este es un nuevo elemento creado con Java Script!";

//obtener el contenedor con la clase "ejemplo1"
let contenedor = document.querySelector(".ejemplo2");

//Agregar el nuevo contenedor 
contenedor.appendChild(nuevoElemento);

//establecemos estilo al nuevo elemento
nuevoElemento.style.backgroundColor = "lightblue";
nuevoElemento.style.padding = "10px";


//cre