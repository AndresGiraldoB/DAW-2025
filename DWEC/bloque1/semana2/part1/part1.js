//Andres Giraldo DAW Semipresencial
'use strict';

//import de users

import {users} from "./users.js";
/*Section 1
Generate a new array containing the email and password details of the
three youngest administrators. Try to perform this operation without
generating any intermediate variables or constants (only the final result).
Except for sorting the array, use JavaScript's iterator operations (obtain an
iterator from the array).

example to result:
[
    { email: 'bob@example.com', password: 'secureBob' },
    { email: 'sophia@example.com', password: 'sophiaSecure' },
    { email: 'diana@example.com', password: 'D1ana#Admin_25' }
]
*/
// copia de users
let usersCopy= [...users];

console.log("Part 1");
console.log("====================");


console.log("Section 1");
console.log("---------");
// ordenamos por edad y elegimos los 3 menores
let youngestAdmins = usersCopy.filter((user)=> user.role.toLocaleLowerCase() === 'admin')//separamos admin
    .sort((user1,user2)=> user1.age - user2.age) //ordenamos por edad
    .slice(0,3) //cortamos el array y nos quedamos con 3 primeros
    .map((user) => ({email: user.email, password: user.password}) )//regresamos nuevo obj {email:, password: };


//console.log(youngestAdmins);
youngestAdmins.forEach((yAdmin)=> console.log(yAdmin));

//section 2
/*Using iterators, obtain the names of the users who have access to PC1.
Separately, obtain the names of the users with access to PC9. Using set
methods, obtain the names of the users who have access to both PCs.
Display the three lists formatted with the JavaScript Internationalization
API (INTL) in English. The output should look like this:
PC1: Peter, Bob, Charlie, Henry, Liam, and Ryan
PC9: Charlie, Grace, Henry, Noah, and Ryan
PC1 y PC9: Charlie, Henry, and Ryan*/
console.log("====================");
console.log("Section 2");
console.log("---------");
//acceso a PC1
let accessPC1 = usersCopy
    
    .filter((user)=> user.authorizations //filtramos y devolvemos array con users authorixations PC1
    .some((auth)=> auth === 'PC1'))// usamos some para retornar bool de si el user ccontiene PC1 en su array de auth;
    .map((user) => user.name);//usamos map modificar el array de users y regresar solo array nombre de users de PC1
//console.log(accessPC1);

//Acceso a PC9

let accessPC9= usersCopy
    .filter((user)=> user.authorizations//filtramos usuarios
    .some((auth)=> auth === 'PC9')) // regresamos solo los que dan a true si son PC9
    .map((user)=> user.name);//el array de users devuelto lo modificamos y devolvemos solo array de nombres
//console.log(accessPC1);
//console.log(accessPC9);

//usar metodos de listas set
let setPC1=new Set(accessPC1);
let setPC2=new Set(accessPC9);
//usamos el metodo de sets para definir un array con la intersection de ambos arrays PC1 y PC9
let bothPCs= [...setPC1.intersection(setPC2)];
//console.log(bothPCs);

//metodos de Intl para dar formato a lista idioma 'En'
console.log(`PC1: ${ new Intl.ListFormat('en',{style:"long", type:"conjunction"}).format(accessPC1)}`);
console.log(`PC9: ${ new Intl.ListFormat('en',{style:"long", type:"conjunction"}).format(accessPC9)}`);
console.log(`PC1 y PC9: ${ new Intl.ListFormat('en',{style:"long", type:"conjunction"}).format(bothPCs)}`);


/*Section 3
Generate an array of users with more or less secure passwords. To do so,
they must meet the following requirements:
• Minimum length 5
• At least one lowercase
• At least one capital letter
• At least one number
• At least one non-alphanumeric character (letter or number)
Afterwards, keep only the username and password of the users who meet
it.
Obtain an iterator from the users array and apply the operations described
above to the iterator.
This is the content of the final array:
[
'Alice -> P@ssw0rd123!',
'Diana -> D1ana#Admin_25',
'Henry -> H3nry!_Secur3',
'Liam -> L!am_P@ss_2025',
'Peter2 -> P3t3r2-S#cur3',
'Ryan -> Ry@n_Is_Str0ng!'
]*/
console.log("====================");
console.log("Section 3");
console.log("---------");