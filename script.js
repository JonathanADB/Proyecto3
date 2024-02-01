"use strict"

//Creamos un nuevo elemento div
let nuevoElemento = document.createElement("div");

//agregar contenido al nuevo elemento div 
nuevoElemento.textContent = "Este es un nuevo elemento creado con Java Script!,";

//obtener el contenedor con la clase "ejemplo1"
let contenedor = document.querySelector(".ejemplo1");

//Agregar el nuevo contenedor 
contenedor.appendChild(nuevoElemento);

//establecemos estilo al nuevo elemento
nuevoElemento.style.backgroundColor = "lightblue";
nuevoElemento.style.padding = "10px";


//ejemplo2 parentNode
//obtenemos el elemento con la clase "ejemplo1"
let divEjemplo =document.querySelector('.ejemplo1');

//creamos un elemento <article>
let articleElement = document.createElement('article');

//creamos un elemento <h3>;
let h3Element = document.createElement('h3');
h3Element.textContent = 'Ampliemos la familia, "parentNodes"';

//creamos un elemento <p>
let pElement = document.createElement('p');
pElement.textContent = 'Este fragmento de código en JavaScript realiza la manipulación dinámica del DOM (Modelo de Objetos de Documento). Comienza obteniendo el elemento con la clase "ejemplo1". Luego, crea dinámicamente un nuevo elemento <article> con un título (<h3>) y contenido (<p>). Finalmente, inserta este nuevo artículo justo después del elemento original con la clase "ejemplo1" en el árbol DOM, permitiendo la creación y manipulación de elementos HTML mediante código JavaScript.';


//Agregamos el <h3> y <p> al <article>
articleElement.appendChild(h3Element);
articleElement.appendChild(pElement);

//Agrega el <article> debajo del div con la clase "ejemplo1"
divEjemplo.parentNode.insertBefore(articleElement, divEjemplo.nextSibling);







//ejemplo usando todo 
//primero creo  el div pa no liarme

let listaArticulosDiv = document.createElement('div');
listaArticulosDiv.id = 'listaArticulos';

// Crear y agregar el primer artículo
let articulo1 = document.createElement('article');
let h2_1 = document.createElement('h2');
h2_1.textContent = 'Articulo 1';
let p_1 = document.createElement('p');
p_1.textContent = 'Descripción del artículo 1.';
articulo1.appendChild(h2_1);
articulo1.appendChild(p_1);
listaArticulosDiv.appendChild(articulo1);

// Crear y agregar el segundo artículo
let articulo2 = document.createElement('article');
let h2_2 = document.createElement('h2');
h2_2.textContent = 'Artículo 2';
let p_2 = document.createElement('p');
p_2.textContent = 'Descripción del artículo 2.';
articulo2.appendChild(h2_2);
articulo2.appendChild(p_2);
listaArticulosDiv.appendChild(articulo2);

// Crear y agregar el tercer artículo
let articulo3 = document.createElement('article');
let h2_3 = document.createElement('h2');
h2_3.textContent = 'Artículo 3';
let p_3 = document.createElement('p');
p_3.textContent = 'Descripción del artículo 3.';
articulo3.appendChild(h2_3);
articulo3.appendChild(p_3);
listaArticulosDiv.appendChild(articulo3);

//ahora agregamos el contenedor div al html
document.body.appendChild(listaArticulosDiv);

//obtenemos  otro elemento para poner el div
let ANDRES = document.querySelector('.ANDRES');

//agregamos listaArticulos al footer
    ANDRES.appendChild(listaArticulosDiv);  

    
    
    //ejemplo chill.nodes
    let hijosDeLista = listaArticulosDiv.childNodes;
    
    //iteramos a traves de los nodos hijos
    for(let i = 0; i < hijosDeLista.length; i++){
        //verificar si el nodo es un elemento
        if(hijosDeLista[i].nodeType === 1){
            //le hacemos algo a cada nodo hijo

            //ejemplo cambiar el color de fondo
            if (i % 2 === 0){
                hijosDeLista[i].style.backgroundColor = 'lightblue';
            } else {
                hijosDeLista[i].style.backgroundColor = 'lightgreen';
            }
        }  

}

section.insertAdjacentHTML('beforeend','<h3>Esto es un titulo inventado</h3>')













