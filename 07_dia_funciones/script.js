//------------------Ejercicios Nivel 2 --------------------

//1. La ecuación lineal se calcula de la siguiente manera: ax + by + c = 0. Escribe una función que calcule el valor de una ecuación lineal, solveLinEquation.

//2. La ecuación cuadrática se calcula de la siguiente manera: ax2 + bx + c = 0. Escribe una función que calcule el valor o los valores de una ecuación cuadrática, solveQuadEquation.

console.log(solveQuadratic()); // {0}
console.log(solveQuadratic(1, 4, 4)); // {-2}
console.log(solveQuadratic(1, -1, -2)); // {2, -1}
console.log(solveQuadratic(1, 7, 12)); // {-3, -4}
console.log(solveQuadratic(1, 0, -4)); //{2, -2}
console.log(solveQuadratic(1, -1, 0)); //{1, 0}

//3. Declare una función llamada printArray. Toma un array como parámetro e imprime cada valor del array.

//4. Declare una función llamada showDateTime que muestre la hora en este formato: 01/08/2020 04:08 usando el objeto Date.

showDateTime()
08/01/2020 04:08

//5. Declare una función llamada swapValues. Esta función intercambia el valor de x a y.

swapValues(3, 4); // x => 4, y=>3
swapValues(4, 5); // x = 5, y = 4

//6. Declare una función llamada reverseArray. Toma un array como parámetro y retorna el array invertido (no use el método reverse()).

console.log(reverseArray([1, 2, 3, 4, 5]));
//[5, 4, 3, 2, 1]
console.log(reverseArray(["A", "B", "C"]));
//['C', 'B', 'A']

//7. Declare una función llamada capitalizeArray. Toma un array como parámetro y retorna el array - capitalizedarray.

//8. Declare una función llamada addItem. Toma un elemento de paŕametro y retorna un array después de agregar el un elemento.

//9. Declare una función llamada removeItem. Toma como parámetro un index y retorna un array después de eleminar el elemento con ese index.

//10. Declare una función llamada sumOfNumbers. Toma un número como parámetro y suma todos los números en ese rango.

//11. Declare una función llamada sumOfOdds. Toma un parámetro numérico y suma todos los números impares en ese rango.

//12. Declare una función llamada sumOfEven. Toma un parámetro numérico y suma todos los números pares en ese rango.

//13. Declare una función llamada evensAndOdds . Toma un entero positivo como parámetro y cuenta el número de pares e impares.

evensAndOdds(100);
El número de impares son 50.
El número de pares es 51.

//14. Escriba una función que tome cualquier número de argumentos y retorne la suma de los argumentos

sum(1, 2, 3); // -> 6
sum(1, 2, 3, 4); // -> 10

//15. Escriba una función randomUserIp que genere una ip de usuario aleatoria.

//16. Escriba una función randomMacAddress que genere una dirección mac aleatoria.

//17. Declare una función llamada randomHexaNumberGenerator. Cuando se llama a esta función, genera un número hexadecimal aleatorio. La función retorna el número hexadecimal.

console.log(randomHexaNumberGenerator());
'#ee33df'

//18. Declare una función llamada userIdGenerator. Cuando se llama a esta función, genera un id de siete caracteres. La función devuelve el id.

console.log(userIdGenerator());
41XTDbE

//----------------------------------- Ejercicios: Nivel 3 ---------------------------------------
//1. Modifique la función userIdGenerator. Declare una función de nombre userIdGeneratedByUser. No toma ningún parámetro pero toma dos entradas usando prompt(). Una de las entradas es la cantidad de caracteres y la segunda entrada es la cantidad de ID que se supone que se generarán.

userIdGeneratedByUser()
'kcsy2
SMFYb
bWmeq
ZXOYh
2Rgxf
'
userIdGeneratedByUser()
'1GCSgPLMaBAVQZ26
YD7eFwNQKNs7qXaT
ycArC5yrRupyG00S
UbGxOFI7UXSWAyKN
dIV0SSUTgAdKwStr
'
//2. Escriba una función llamada rgbColorGenerator que genera colores rgb

rgbColorGenerator()
rgb(125,244,255)

//3. Escriba una función arrayOfHexaColors que retorna cualquier cantidad de colores hexadecimales en un array.

//4. Escriba una función arrayOfRgbColors que retorna cualquier cantidad de colores RGB en un array.

//5. Escriba una función convertHexaToRgb que convierta el color hexa a rgb y retorna un color rgb.

//6. Escriba una función convertRgbToHexa que convierta rgb a color hexa y retorna un color hexa.

//7. Escriba una función generateColors que pueda generar cualquier número de colores hexa o rgb.

console.log(generateColors("hexa", 3)); // ['#a3e12f', '#03ed55', '#eb3d2b']
console.log(generateColors("hexa", 1)); // '#b334ef'
console.log(generateColors("rgb", 3)); // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
console.log(generateColors("rgb", 1)); // 'rgb(33,79, 176)'

//8. Llame a su función shuffleArray, toma un array como parámetro y devuelve un array mezclada

//9. Llame a su función factorial, toma un número entero como parámetro y devuelve un factorial del número.

//10. Llame a su función isEmpty, toma un parámetro y verifica si está vacío o no.

//11. Llame a su función sum, toma cualquier cantidad de argumentos y devuelve la suma.

//12. Escriba una función llamada sumOfArrayItems, toma un array como parámetro y retorna la suma de todos los elementos. Compruebe si todos los elementos de la matriz son tipos de números. Si no, dé una respuesta razonable.

//13. Escribe una función llamada average, toma un array como parámetro y retorna el promedio de los elementos. Compruebe si todos los elementos de la matriz son tipos de números. Si no, dé una respuesta adecuada.

//14. Escriba una función llamada modifyArray que tome un array como parámetro y modifique el quinto elemento del array y retorna el array. Si la longitud del array es inferior a cinco, retorna 'elemento no encontrado'.

console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']);
['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']);
  'Not Found'

//15. Escribe una función llamada isPrime, que verifica si un número es un número primo.

//16. Escriba una función que verifique si todos los elementos son únicos en un array.

//17. Escriba una función que verifique si todos los elementos de un array son del mismo tipo de datos.

//18. El nombre de las variables de JavaScript no admite caracteres o símbolos especiales, excepto $ o _. 
//19. Escriba una función isValidVariable que verifique si una variable es válida o inválida.
