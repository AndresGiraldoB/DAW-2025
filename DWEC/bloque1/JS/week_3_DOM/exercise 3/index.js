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

    if(!file.type.startsWith("image")){//si el fichero no es tipo image
        mainPhoto.setCustomValidity("Error the file must be of type image");
    }else if(file.size > 200000){//si el fichero tiene un size <200KB
        mainPhoto.setCustomValidity("Error the image must not exceed 200KB");
    }else{//en caso contrario mensaje de error vacio
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
        imagePreview.classList.toggle("hidden",imagePreview.src === "" || !mainPhoto.checkValidity());//si imagePreview.src es " " o mainPhoto.checkValidity() regresa false

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
    
//validdacion de formulario con Validation Api
propertyForm.addEventListener("submit", async event =>{
    //detenemos el envio
    event.preventDefault();

    //validamos formulario con reportValidit()
    
    if(!propertyForm.reportValidity()) return; //si regresa false (existe algun elemento input con pseudoclase :invalid), cortaremos el flujo

    //en caso de reportvalidity()->true continuamos con el flujo
    //Create an object with all the property’s data and pass it to the function mentioned above.
    //creamos objeto con los campos del formulario
    const newProperty= {
        title: propertyForm.title?.value,
        address:propertyForm.address?.value,
        town: propertyForm.town?.value,
        province: propertyForm.province?.value,
        price: propertyForm.price?.value,
        sqmeters: propertyForm.sqmeters?.value,
        numRooms: propertyForm.numRooms?.value,
        numBaths: propertyForm.numBaths?.value,
        };
    //anyadir nueva propiedad en el DOM
    createProperty(newProperty);//lammamos nuestra funcion para insertar propiedad y psasmos objeto con informacion del propiedad
    //limpiamos formulario
    propertyForm.reset();
    //limpiamos src
    imagePreview.src="";
    imagePreview.classList.add("hidden");//anyadimos clase hidden para ocultar

});

/*◦ Append the card to the DOM (inside the div#property-listings container).*/
function createProperty(propertyObj){
    //clonamos contenido del template
    const propertyHtml=document.querySelector("template#property-card-template").content.cloneNode(true);//clonamos el template para reutilizarlo
    //seleccionamos div contenedor donde estara la informacion de la propiedad
    const newProperty=propertyHtml.firstElementChild;
    //boton de eliminar
    const deleteProperty=newProperty.querySelector("button.btn-delete");
    //nodo img
    const imgProperty=deleteProperty.nextElementSibling;
    //nodo div hermano de img que contiene informacion de la propiedad
    const propertyInfo=imgProperty.nextElementSibling;
    //insertamos el contenido de texto en los hihos del div de información de la propiedad
  
    //property tittle
    propertyInfo.children[0].textContent= propertyObj.title;//anyadimos en el contenido de texto el valor del cmapo title del formulario
    //property location
    //array con los valores de los campos correspondientes a direccion localidad provincia
    const propertyLocation=[propertyObj.address, propertyObj.town, propertyObj.province];
     //aplicamos toString() para crear cadena de texto con ',' y lo insertamos en el parrafo
    propertyInfo.children[1].textContent= propertyLocation.join(", ");
    //preccio de la propiedad
    //Transform the price to currency (in € and english) using the Intl API.
    propertyInfo.children[2].textContent= new Intl.NumberFormat('en-UK',{currency:"EUR", style:"currency"}).format(propertyObj.price);
    //inserar informacion en div y span
    const moreInfo=propertyInfo.querySelector("div");
    //other 
    // info sqmeters
    moreInfo.children[0].textContent=propertyObj.sqmeters + " sqm";
    //rooms
    moreInfo.children[1].textContent=propertyObj.numRooms + " beds";
    //baths
    moreInfo.children[2].textContent=propertyObj.numBaths + " baths";
    //asignamos imagen
    const imagePreview= document.querySelector("#image-preview");//buscamos el div donde insertaremos el template
    imgProperty.src=imagePreview.src;

    /*Add the click event to the delete button inside the card (button.btn-delete). When
    this button is clicked, it will remove the card from the DOM.*/
    //boton eliminar aniamdimos eventListener
    deleteProperty.addEventListener("click", e=>{
        newProperty.remove();
    });

    /*◦ Append the card to the DOM (inside the div#property-listings container).*/
    //seleccionamos el nodo donde insertaremos el template
    const propertyListing=document.querySelector("div#property-listings");
    propertyListing.append(newProperty);
};
