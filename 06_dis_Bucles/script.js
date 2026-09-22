//-------------Ejercicios: Nivel 1 ---------------
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

const mernStack = ["MongoDB", "Express", "React", "Node"];
//1. Itera de 0 a 10 usando el bucle for, haga lo mismo usando los bucles while y do while

//2. Itera 10 to 0 usando el bucle for, haga lo mismo usando los bucles while y do while

//3. Itera de 0 a n usando el bucle for

//4. Escribe un bucle que haga el siguiente patrón usando console.log():
/*
    #
    ##
    ###
    ####
    #####
    ######
    #######
*/
//5. Usa un bucle para imprimir el siguiente patrón:
/*
0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100
*/

//6. Usando un bucle imprime el siguiente patrón:
/*
 i    i^2   i^3
 0    0     0
 1    1     1
 2    4     8
 3    9     27
 4    16    64
 5    25    125
 6    36    216
 7    49    343
 8    64    512
 9    81    729
 10   100   1000
*/

//7. Usa el bucle for para iterar de 0 a 100 e imprima solo números pares

//8. Usa el bucle for para iterar de 0 a 100 e imprima solo números impares

//9. Usa el bucle for para iterar de 0 a 100 e imprima los solo números primos

//10. Usa el bucle for para iterar de 0 a 100 e imprima la suma de todos los números.
//La suma de todos los números de 0 a 100 es 5050.

//11. Usa el bucle para iterar de 0 a 100 e imprimir la suma de todos los pares y la suma de todos los impares.
//La suma de todos los pares de 0 a 100 es 2550. Y la suma de todos los impares de 0 a 100 es 2500.

//12. Usa el bucle para iterar de 0 a 100 e imprimir la suma de todos los pares y la suma de todos los impares. Imprimir suma de pares y suma de impares como un array
// [2550, 2500]
//13. Desarrolla un pequeño script que genera una matriz de 5 números aleatorios

//14. Desarrolla un pequeño script que genera una matriz de 5 números aleatorios. Los números debe ser únicos

//15. Desarrolla un pequeño script que genera un id aleatorio de seis caracteres:
//5j2khz

//-------------Ejercicios: Nivel 2 ---------------
//-------------Ejercicios: Nivel 3 ---------------
//1. Copia el array countries (Evita mutaciones)
const copyCountries = [];
for(const country of countries){
  copyCountries.push(country)
}
console.log(copyCountries);
//2. Los arrays son mutables. Crea una copia del array que no modifique el original. Ordena la copia del array y guárdala en una variable sortedCountries
const sortedCountries = [...cuntries].sort(); //... crea una copia y luego se ordena con sort
//3. Ordena el array webTechs y el array mernStack
const sortWebTechs = [...webTechs].sort();
const sortMernStack = [...mernStack].sort();
//4. Extrae todos los países que contengan la palabra 'land' del array countries e imprimela como un array
const countriesWithLand = countries.filter();
//5. Encuentra el país que contiene la mayor cantidad de caracteres en el array countries
//6. Extrae todos los países que contienen la palabra 'land' del array countries e imprimela como un array
//7. Extrae todos los países que contengan solo cuatro caracters del array countries e impremela como un array
//8. Extrae todos los paíse que contengan dos o más palabras del array countries e imprimela como un array
//9. Invertir el array countries y poner en mayúscula cada país y almacenalo en un array
