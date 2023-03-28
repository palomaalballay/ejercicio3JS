//- Una cadena de texto con tu Nombre  

let miNombre = "Paloma";
console.log(miNombre)

//- Otra cadena de texto con tu Apellido

let miApellido = "Alballay    ";
console.log(miApellido)

//- Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias

let estudiante = `${miNombre} ${miApellido}`;
console.log(estudiante);

//- Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas

let estudianteMayus = `${estudiante.toUpperCase()}`;
console.log(estudianteMayus);


//- Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas

let estudianteMinus = `${estudiante.toLowerCase()}`;
console.log(estudianteMinus);

//- Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios

let nroLetras = `${estudiante.length}`;
console.log(nroLetras);

//- Una variable que contenga la primera letra del Nombre

let primerLetra = `${miNombre[0]}`;
console.log(primerLetra);

//- Otra variable que contenga la última letra del Apellido

let ultimaLetra = `${miApellido[7]}`;
console.log(ultimaLetra);

//- Una cadena de texto que elimine los espacios de la variable "estudiante"

let sinEspacio = `${estudiante.trimEnd()}`;
console.log(sinEspacio);
console.log(sinEspacio.length);

//- Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"

let buscador = `${estudiante.includes("Paloma")}`;
console.log(buscador);
