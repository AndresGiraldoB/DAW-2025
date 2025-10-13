//AndresGiraldoB DAW semipresencial
/*****
 * DOM - Exercise 1
 * 
 * When a user clicks on a div inside the div.container element, add or remove (toggle) the "selected" CSS class
 * The button#delete element will remove all selected divs from the DOM
 */
'use strict';
//opcion 1 anyadir directamente  al padre el evento 
document.querySelector("div.container").addEventListener('click',(ele)=> ele.target.classList.toggle('selected'));

//opcion 2 seleccionar padre y luego por medio de este llegar a todos sus hijos
//const div_container=document.querySelector("div.container");

//opcion 2 hijos de container les anyadimos el manejador a cada uno
//const div_inside=Array.from(div_container.children).map((e)=> e.addEventListener('click',(e)=> e.target.classList.toggle('selected')));
//version mas legible con un for
/*const div_inside=div_container.children;
for(let dv of div_inside){
    //console.log(dv);
    dv.addEventListener('click',(e)=> e.target.classList.toggle('selected'));
}*/

const btn_del=document.getElementById("delete");
btn_del.addEventListener('click',(e)=> {
    let divsDelete=document.getElementsByClassName("selected");
    Array.from(divsDelete).forEach((div)=> div.remove());
});