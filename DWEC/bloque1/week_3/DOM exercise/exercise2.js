//AndresGiraldoB DAW Semipresencial

/*****
 * DOM - Exercise 2
 * 
 * When a user clicks on a div inside the div.container element, add or remove (toggle) the "selected" CSS class,
 * but this time, ONLY 1 div can have the "selected" class activated (remove from other div elements if necessary)
 * 
 * The button#insert-before element will create a NEW div with the text in the input#text element 
 * (don't forget the click event on the new div) before the selected div or at the beginning of 
 * the div.container if none is selected
 * 
 * The button#insert-after element will do the same but add it AFTER the selected div or at the end
 * of the div.container if none is selected
 * 
 * The button#replace elemente will create a NEW DIV with the corresponding text and replace the selected div
 * with it. If none is selected do nothing.
 * 
 * The button#delete elemente will delete the selected div (do nothing if none is selected).
 * 
 * The button#clear elemente will remove everything inside the div.container element.
 * 
 * DON'T USE innerHTML!!!!
 */

//seleccionar un solo div
const div_container=document.querySelector("div.container");
div_container.addEventListener("click",(e)=>{
    
    //quitamos class selected de todos y anyadimmos al nuevo selected
    const div_selected=div_container.getElementsByClassName("selected");
    Array.from(div_selected).forEach((div)=> div.classList.remove("selected"));
    //quita o pone class selected
    e.target.classList.toggle("selected");
    /*if(e.target.classList.contains("selected")){
        e.target.classList.remove("selected");
    }else{
        e.target.classList.add("selected");
    }*/
    

})

//insert-before button
const insert_before_btn=document.querySelector("button#insert-before");
insert_before_btn.addEventListener("click",(e)=>{
    
    const selected=div_container.querySelector(".selected");
    const inputText=document.querySelector("input#text");
    const newDiv=document.createElement("div");

    newDiv.textContent=inputText.value;

    if(selected){
        selected.before(newDiv);
    }else{
        div_container.prepend(newDiv);
    }

})

//inset-after
const insert_after_btn=document.querySelector("button#insert-after");
insert_after_btn.addEventListener("click",()=>{

    const selected=div_container.querySelector(".selected");
    const input_text=document.querySelector("input#text");
    const newDiv=document.createElement("div");

    newDiv.textContent=input_text.value;

    selected ? selected.after(newDiv) : div_container.append(newDiv);

});

//replace
const replace_btn=document.querySelector("button#replace");
replace_btn.addEventListener("click",()=>{
    const selected=document.querySelector(".selected");
    const input_text=document.querySelector("input#text");
    const replaceDiv=document.createElement("div");

    replaceDiv.textContent=input_text.value;

    if(selected)
        selected.replaceWith(replaceDiv);

});

//delete
const delete_btn=document.querySelector("button#delete");
delete_btn.addEventListener("click",()=>{
    const selected=document.querySelector(".selected");
    if(selected)
        selected.remove();
});

//clear
const clear_btn=document.querySelector("button#clear");
clear_btn.addEventListener("click",()=>{

    const allDivs=div_container.children;
    Array.from(allDivs).forEach((div)=> div.remove());
});