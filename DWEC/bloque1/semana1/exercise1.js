/**
 * Part 1
 * Create a function that receives 2 strings. The second string must contain only a letter
 * It should return the number of times that letter (second parameter) is included in the string (first parameter).
 * It should not differentiate between uppercase and lowercase letters
 * Check that both parameters are strings and the second string is only 1 character. If there's an error, print a message and return -1
 * Example: timesChar("Characteristic", "c") -> 3
 */

'use strict';

console.log("EXERCISE 1 - PART 1");

//funcion lambda que recibe un strin con una oalabra y segundo parametro una letra, si no ecuentra ninguna -1 si la encuentra las cuenta

let timesChar = (word, char)=>{
    //check thar both are strings and length the first > 1 and second = 1
    if(typeof word !== 'string'){
        // first parameter string
        return `The first parameter should be a string, but the actual type is: ${typeof word}`;
    }
    if(typeof char !== 'string'){
        return `The secobd parameter should be a string, but the actual type is: ${typeof char}`;
    }
    // lenght 
    if(word.length <= 1){
        return `The length of the first parameter should be greater than 1, but the actual length is: ${word.length}`;
    }
    if(char.length != 1){
        return `The length of the second parameter should be 1 character, but the actual length is: ${char.length}`;
    }

    //convertimos el string en un array
    let arrayChar=Array.from(word);

    let contador =0;
    arrayChar.forEach((element)=>{
        
        if(element.toLocaleUpperCase() === char.toLocaleUpperCase()){
            contador++;
        }
        
        return contador;
    });
    /*
    if(contador < 1){
        return -1;
    }else{
        return contador;
    }*/
   //cambio por operador ternario
   return contador < 1 ? -1 : contador;

};

console.log(timesChar("Characteristic", "c"));

console.log("===================================");
let timesChar2=(cadena,letra)=>{
     //check thar both are strings and length the first > 1 and second = 1
    if(typeof cadena !== 'string'){
        // first parameter string
        return `The first parameter should be a string, but the actual type is: ${typeof cadena}`;
    }
    if(typeof letra !== 'string'){
        return `The secobd parameter should be a string, but the actual type is: ${typeof letra}`;
    }
    // lenght 
    if(cadena.length <= 1){
        return `The length of the first parameter should be greater than 1, but the actual length is: ${cadena.length}`;
    }
    if(letra.length != 1){
        return `The length of the second parameter should be 1 character, but the actual length is: ${letra.length}`;
    }

    //convertimos a array para iterar sin usar loops
    let arrayCadena=Array.from(cadena);
    //usamos reduce para iterar por el array
    let resultado= arrayCadena.reduce((acumulador,valorAc)=>{
        //usamos el acumulador para contar numero de repeticiones
        if(valorAc.toLocaleUpperCase() == letra.toLocaleUpperCase()){
            //si se repite regresamos acumulador + 1 --> acumulador++; modifica y es imposible modificar acumulador inmutable
            return acumulador + 1;
        }
        return acumulador;
    },0);
    //si el resultado es menor a 1 regresamo -1 
    /*if(resultado < 1){
        return -1;
    }else{ // de lo contrario regresaos el resultado
        return resultado;
    }*/
   //operador ternario
   return resultado < 1 ? -1 : resultado;


};
console.log(timesChar2("Characteristic", "c"));
console.log(timesChar2("CddDfDDddGGhhHHggHhhhh", "d"));
/**
 * Part 2
 * Create a function that takes a string as input and checks if it's a palindrome (if it's the same when reversed).
 * Do this without using loops (hint: you can use Array.from to convert a string into an array).
 * Check that the type of the parameter is "string", and the lenght is at least 1 or show an error
 * Example: isPalindrome("abeceba") -> true
 */

console.log("\nEXERCISE 1 - PART 2");

let isPalindrome=(stringInput)=>{
    //validate type string
    if(typeof stringInput !== 'string'){
        return `The value passed to the function is not of type string, the current value is of type: ${typeof stringInput}`;
    }
    //validate length more 1
    if(stringInput.length <= 1){
        return `The value passed to the function does not meet the requirement of having a length greater than 1, the length of the current value is: ${stringInput}`;
    } 
    //creamos una nueva cadena => Array.from(stringInput) ->convierte la cadena en un array, toReverse() invierte el orden del array sin modificar el original
    //join('') pasa el array a cadena de texto ya invertida
    let stringReverse=Array.from(stringInput).reverse().join('');
   
   //comparamos las cadenas con localeCompare
   /*if(stringInput.localeCompare(stringReverse) !== 0){
    //sie es diferente a 0, 0 es iguales , diferentes -1
    return false;
   }
   return true;*/
   return stringInput.localeCompare(stringReverse) !== 0 ? false : true;
   

};
console.log(isPalindrome("abeceba"));
console.log(isPalindrome("anais"));
/**
 * Part 3
 * Create an array of strings.
 * Filter the array to include only the strings which their length is at least 5 characters
 * Transform all the strings in the filtered array to UPPERCASE
 * Print the resulting array, using ";" as the separator
 * Don't use traditional loops! (while, for, ...)
 */
console.log("\nEXERCISE 1 - PART 3");

//create array of strings
let myStrings=['exam','learning','life','move','review','use','policies','manage'];
//filter array only the strings wich their lenght is least 5
let myFilteredStrings=myStrings.filter((string)=> string.length >= 5);
// trasform to uppercase
myFilteredStrings= myFilteredStrings.map((stringMinus)=> stringMinus.toLocaleUpperCase());
//print the array using ';' as separator
console.log(myFilteredStrings.join(';'));


/**
 * Part 4
 * Develop a function that compresses a string by replacing consecutive repeating characters with
 * the character and the count of repetitions. For example, "AAAABBBCC" would become "4A3B2C".
 * Example: stringCompression("GGGHHRRRRRRRUIIIOOOO") -> 3G2H7R1U3I4O
 */

console.log("\nEXERCISE 1 - PART 4");

let stringCompression=(myString)=>{
    //validate type string
    if(typeof myString !== 'string'){
        return `The value passed to function is not type string, the current value is type: ${typeof myString}`;
    }
    //validate length more greater than 1
    if( myString.length <= 1){
       return `The string passed to the function must have more than 1 letter, the current string has: ${myString.length}`;
    }
    //transform the string to array
    let arrayMyString = Array.from(myString);
    let count=1;// cada letra esta almenos 1 vez
    //use the reduce() method
    let stringCompressed= arrayMyString.reduce((acumulador,valorActual,indiceActual)=>{
        //validate if the current value is the same of array[currentIndex + 1] next position
        // If the value matches, we add one to the counter, otherwise we concatenate the letter to the current counter and 
        // the counter returns to 1 to count the next one.
        if(valorActual === arrayMyString[indiceActual + 1]){
            count++;
        }else{
            acumulador += `${valorActual}${count}`;
            count=1;
        }
        return acumulador;
    },'');
  
    //console.log(stringCompressed);
    return stringCompressed;
};
console.log(stringCompression("GGGHHRRRRRRRUIIIOOOO")); 
console.log(stringCompression('ddDDDFFFfffzzZ')); 
/**
 * Part 5
 * Create an array with 4 values and do the following (use the correct array methods).
 * Add 2 elements at the beginning
 * Add 2 more at the end.
 * Delete positions 3,4 and 5
 * Insert 2 elements before the last element.
 * On each change, show the resulting array with its elements separated by '=>' (don't use any loop).
 */
console.log("EXERCISE 1 - PART 5");

//create a array with 4 elements
let myArrayFruits=['Strawberry','Pineapple', 'Raspberry','Peach'];
console.log(myArrayFruits.join('=>'));//Strawberry=>Pineapple=>Raspberry=>Peach
//add 2 elements at the beginning
myArrayFruits.unshift('Lime','Watermelon');
console.log(myArrayFruits.join('=>'));//Lime=>Watermelon=>Strawberry=>Pineapple=>Raspberry=>Peach
//add 2 elements at the end
myArrayFruits.push('Kiwi','Coconut');
console.log(myArrayFruits.join('=>'));//Lime=>Watermelon=>Strawberry=>Pineapple=>Raspberry=>Peach=>Kiwi=>Coconut
//delete position 3,4,5
myArrayFruits.splice(3,3);
console.log(myArrayFruits.join('=>'));//Lime=>Watermelon=>Strawberry=>Kiwi=>Coconut
//insert 2 elements before the last element
myArrayFruits.push('Blueberry','Pomegranate');
console.log(myArrayFruits.join('=>'));//Lime=>Watermelon=>Strawberry=>Kiwi=>Coconut=>Blueberry=>Pomegranate

   

/**
 * Part 6
 * Create a function that takes an array of numbers containing duplicate values. It should return the
 * first number that is repeated in the array, or -1 if there are no duplicates.
 * Do not use loops, and  if you don't know how to do it without loops, you can only use one loop
 * (.forEach counts as a loop).
 * Example: findFirstRepeated([1,4,7,3,8,4,5,5,1]) -> 4
 */

console.log("EXERCISE 1 - PART 6");

/**
 * Part 7
 * Create an array with several strings. Using the reduce method, return a string
 * that is a concatenation of the first letter of every string in the array.
 */

console.log("EXERCISE 1 - PART 7");
//create a array of strings
let myArrayAnimals=['horse','cat', 'dog', 'goat','raccoon','seal','bear','sheep'];
//use reducce method 
let concatFirstLetter=myArrayAnimals.reduce((acumulador,valorActual)=>{
    //return acumulador += valorActual[0];
    //return acumulador += valorActual.charAt(0).toLocaleUpperCase();
    return acumulador += valorActual.slice(0,1).toLocaleUpperCase();
},'');//string vacio

console.log(concatFirstLetter); //HCDGRSBS

/**
 * Part 8
 * Create a function that takes an array of strings as the first parameter and a string as the second.
 * It should return a new array containing the words from the first array whose letters are all present
 * in the second string. Try not to use loops.
 * Example: filterWords(["house", "car", "watch", "table"], "catboulerham") -> ['car', 'table']
 */

console.log("EXERCISE 1 - PART 8");

/**
 * Part 9
 * Create a function that takes an array of lights represented by the characters '🔴' and '🟢'.
 * The function should check if the lights are alternating (e.g., ['🔴', '🟢', '🔴', '🟢', '🔴']).
 * Return the minimum number of lights that need to be changed to make the lights alternate.
 * Example: adjustLights(['🔴', '🔴', '🟢', '🔴', '🟢'])  -> 1 (change the first light to green)
 */
console.log("EXERCISE 1 - PART 9");


/**
 * Part 10
 * Create a Map object. The key will be a student name, and the value an array with all his/her exam marks.
 * Iterate through the Map and show each student's name, the marks separated by '-' and the average mark (with 2 decimals).
 * Example: Peter (7.60 - 2.50 - 6.25 - 9.00). Average: 6.34
 */
console.log("EXERCISE 1 - PART 10");

//create a map objects
let studentsMap= new Map();

studentsMap.set("Anais" ,[2.5,6.5,7,8.5]);
studentsMap.set("Andres",[7,2,4.5,5]);
studentsMap.set("Fernando",[2.5,6.5,7,8.5]);

let average=0;
//iterar por el mapa enseñando nombre notas y media
// al recoorer un mapa con foreach se tenemos acceso a su valor, clave en este orden
studentsMap.forEach((marks,student)=>{
    //para calcular media usaamos reduce para sumar cada nota dentro del array de notas de cada estudiante
    average=marks.reduce((total,valorActual)=> total += valorActual) / marks.length;
    //mostramos el estudiante sus notas y la media
    console.log(`${student} (${marks.join(' - ')}) Average: ${average.toFixed(2)}`);
});


/**
 * Part 11
 * Create a Map collection where the key is the name of a dish and the value is an array of ingredients.
 * From this Map, generate another Map where the key is the ingredient name and the value is an array of
 * dishes where that ingredient appears.
 */
console.log("EXERCISE 1 - PART 11");

/**
 * Part 12
 * Create a funcion that can receive as many numbers as you want by parameter. Use rest to group them in
 * an array and print the ones that are even and the ones that arre odd separately.
 * DON'T use loops (for, while, etc.)
 */
console.log("EXERCISE 1 - PART 12");


/**
 * Part 13
 * Create a function that receives an array and adds the first three numbers of the array.
 * Use array destructuring in the parameters to get those three numbers.
 * If any of those numbers is not present in the array, a default value of 0 will be assigned
 * Return the result of adding those three numbers
 */

console.log("EXERCISE 1 - PART 13");


/**
 * Part 14
 * Create a function that takes an indeterminate number of strings as arguments,
 * groups them into an array, and returns a new array containing the length of each string.
 * Do not use loops.
 * Example: getStringLengths("potato", "milk", "car", "table") -> [6, 4, 3, 5]
 */

console.log("EXERCISE 1 - PART 14");

/**
 * Part 15
 * Create an array, and without modifying it, generate the following derived arrays (each new array derives from the previous one):
 * - Add 2 elements to the beginning of the array
 * - Delete positions 4 and 5
 * - Concatenate the elements of another array to the end Show the resulting array after each operation.
 *
 * No operation performed should modify the array on which it operates. Show the original array at the end.
 */

console.log("EXERCISE 1 - PART 15");



