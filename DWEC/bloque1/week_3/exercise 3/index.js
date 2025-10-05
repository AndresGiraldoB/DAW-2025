// Implement this file
//ANdresGiraldoB  DAW Semipresencial
'use strict';


//buscamos el elemento en el dom elmento con id property-form -> formulario

//let propertyForm=document.getElementById("property-form");//con getElementById('idElemento');
const propertyForm=document.querySelector("#property-form");//seleccionamos con querySelector form id property-form

let imagePreview= document.querySelector("#image-preview");
//uso de formulario.elements.namedItem('atrName')//.propiedad
//mainPhoto

let mainPhoto=propertyForm.elements.namedItem("mainPhoto");

mainPhoto.addEventListener("change",event=>{
    /*When you select an image, it will show a preview inside the
    img#imagePreview element. In order to do that, transform the image to
    base64 format and put that in the src attribute.*/
    let file=event.target.files[0];
    
    /*Also, using the Constraint Validation API, verify that the selected file is an
    image (check that file.type starts with “image”), and it doesn’t weight more
    than 200KB. Show error messages in the field if that happens.*/
    if(!file){
        mainPhoto.setCustomValidity("");
        return;
    }

    if(!file.type.startsWith("image")){
        mainPhoto.setCustomValidity("Error the file must be of type image");
    }else if(file.size > 200000){
        mainPhoto.setCustomValidity("Error the image must not exceed 200KB");
    }else{
        mainPhoto.setCustomValidity("");
    }

     
    let reader=new FileReader();
    reader.readAsDataURL(file);
    //put in src attribute
    reader.addEventListener("load",e=>{
    
        imagePreview.src=reader.result;
           /*The img#imgPreview element has a CSS class “hidden” which hides it.
        When the image is showing but the src attribute is empty or not correct, it will
        display a broken image icon in many browsers. You should remove this class
        before assigning the base64 image to this element, and add it again when the
        selected file is not correct.*/
        //quitamos o ponemos la clase con toggle(clase,boleano)
        imagePreview.classList.toggle("hidden",imagePreview.src === "" || !mainPhoto.checkValidity());

    });
});//input file name mainPhoto

/*Submitting the form
When the user submits the form, do the following:
• Validate the form using the Contraint Validation API. If it’s not valid, do not continue.
• If everything is correct, add the new property to the HTML document, and reset the
form (also hide the preview image).
◦ Use the template present in the HTML file (remember to clone it) and fill it with
the form’s data. Do this in a separate function.
◦ Create an object with all the property’s data and pass it to the function
mentioned above.
◦ Transform the price to currency (in € and english) using the Intl API.
◦ Append the card to the DOM (inside the div#property-listings container).
◦ Add the click event to the delete button inside the card (button.btn-delete). When
this button is clicked, it will remove the card from the DOM.*/
    
