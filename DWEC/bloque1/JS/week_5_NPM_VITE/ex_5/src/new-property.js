//AndresGiraldoB DAW semipresencial

import { ProvincesService } from "./provinces.service.js";
import { PropertiesService } from "./properties.service.js";



const provincesService=new ProvincesService();
const propertiesService=new PropertiesService();
//select input select and add Event listener
const selectProvinces=document.querySelector("select#province");
selectProvinces.addEventListener("change",loadTowns);//if input change change towns list

//call load all provinces
loadProvinces();


//load image mainPhoto image-preview
const propertyForm=document.querySelector("form#property-form");
const mainPhoto=propertyForm.elements.namedItem("mainPhoto");
const imagePreview=document.querySelector("img#image-preview");

mainPhoto.addEventListener("change",(e)=>{
    let file = e.target.files[0];

    if(!file) mainPhoto.setCustomValidity("");
    

    if(!file.type.startsWith("image"))
        mainPhoto.setCustomValidity("Error the file must be of type image");
    else if(file.size > 200000)
        mainPhoto.setCustomValidity("Error the image must not exceed 200KB");
    else
        mainPhoto.setCustomValidity("");
    


    let reader= new FileReader();
    reader.readAsDataURL(file);

    reader.addEventListener("load",()=>{
        imagePreview.src=reader.result;
        imagePreview.classList.toggle("hidden", imagePreview.src === "" || !mainPhoto.checkValidity());

    });

});



propertyForm.addEventListener("submit",addProperty);




//aux functions
function insertOption(optionV,parentNode){
    const newOption=document.createElement("option");
    newOption.value=optionV.id;
    newOption.label=optionV.name;

    parentNode.append(newOption);
}

//Async Functions 

async function loadProvinces(){
    try{
        const provinces= await provincesService.getProvinces();
        provinces.forEach((province)=>{
            insertOption(province,selectProvinces);
        });
    }catch(error){
        alert("Error to load provinces: "+ error);
    }
}

async function loadTowns(){
    
    try{
        const idProvince=document.querySelector("select#province").value;
        const selectTown=document.querySelector("select#town");
        const oldOption=selectTown.children;
        
        if(oldOption) Array.from(oldOption).forEach((opt)=> {
            if(opt.value !== "") opt.remove();
        });

        const towns=await provincesService.getTowns(idProvince);
        towns.forEach((town)=>{
            insertOption(town,selectTown);
            
        });
    }catch(error){
        alert("Error to load towns: "+ error);
    }
}


async function addProperty(){
    //includes field townId and field description
    event.preventDefault();
    try{

        let newProperty= {
        address: propertyForm.address?.value,
        title: propertyForm.title?.value,
        description: propertyForm.description?.value,
        sqmeters: !isNaN(propertyForm.sqmeters?.value)?Number(propertyForm.sqmeters.value):propertyForm.sqmeters?.value,
        numRooms: !isNaN(propertyForm.numRooms?.value)? Number(propertyForm.numRooms.value) : propertyForm.numRooms?.value,
        numBaths: !isNaN(propertyForm.numBaths?.value)? Number(propertyForm.numBaths.value) : propertyForm.numBaths?.value,
        price: !isNaN(propertyForm.price?.value) ? Number(propertyForm.price.value): propertyForm.price?.value,
        mainPhoto: imagePreview?.src,
        townId: !isNaN(propertyForm.town?.value)? Number(propertyForm.town.value): propertyForm.town?.value,

        };
        

        /*const resp=  */
        await propertiesService.insertProperty(newProperty);
        //if the insert its ok
        location.assign("index.html");
        //console.log(newProperty);
    }catch(error){
        alert("Error to add new property: "+ error);
    }
    
}

