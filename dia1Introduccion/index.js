//------ Ejercicios ------
//------ Gabriela Céspedes ------
//1. Escribe un comentario de una sola línea que diga "los comentarios pueden hacer que el código sea legible"
// "los comentarios pueden hacer que el código sea legible"

//2. Escribe otro comentario que diga, "Bienvenido a 30DaysOfJavaScript"
// "Bienvenido a 30DaysOfJavaScript"

//3. Escribe un comentario multilínea que diga, "Los comentarios pueden hacer el código legible, fácil de usar e informativo"
/*
    "Los comentarios pueden hacer el código legible, 
    fácil de usar e informativo"
*/

//4. Crea un archivo variable.js y declarar variables y asignar tipos de datos string, booleanos, indefinidos y nulos
let stg = "HOLA";
let bln = true;
let idf; //undefiend
let valor  = null;
//5. Crea el archivo datatypes.js y utilizar el operador "typeof" de JavaScript para comprobar los diferentes tipos de datos. Comprueba el tipo de datos de cada variable
let tipoStg = typeof(stg);
console.log(tipoStg); //string
let tipoBln = typeof(bln); //boolean
console.log(tipoBln); //boolean
let tipoIdf = typeof(idf);
console.log(tipoIdf); //undefiend
let tipoValor = typeof(valor);
console.log(tipoValor); //object
//6. Declara cuatro variables sin asignar valores
let variable1;
let variable2;
let variable3;
let variable4;
//7. Declara cuatro variables con valores asignados
let num = 1;
let saludo = "HOLA";
let si = true;
let objeto = null;
//8. Declara variables para almacenar su nombre, apellido, estado civil, país y edad en múltiples líneas
let nombre;
let apellido;
let estCivil;
let pais;
let edad;

//9. Declara variables para almacenar su nombre, apellido, estado civil, país y edad en una sola línea
let name, lastname, married, country, age;

//10. Declara dos variables miEdad y tuEdad y asígneles valores iniciales y regístrese en la consola del navegador.
/*
    Tengo 25 años.
    Tú tienes 30 años.
 */
let miedad = 23;
let tuedad = 22;
console.log(`Tengo ${miedad} años`);
console.log(`Tú tienes ${tuedad} años`);
