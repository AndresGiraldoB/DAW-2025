//AndressGiraldoB DAW semipresencial
import { PropertiesService } from "./properties.service.js";

const propertiesService=new PropertiesService();


//aux functions
function insertTemplate(propertyObj){
    const template= document.querySelector("template#property-card-template").content.cloneNode(true);
    const principalConatiner= template.firstElementChild;
    const mainPhoto=principalConatiner.querySelector("img.property-image");
    const divPropertyChilds=mainPhoto.nextElementSibling.children;
    
    const btnDel=mainPhoto.previousElementSibling;
    
    divPropertyChilds[0].textContent=propertyObj.title;
    divPropertyChilds[1].textContent=propertyObj.address + ", " + propertyObj.town.name + ", " + propertyObj.town.province.name;
    divPropertyChilds[2].textContent=propertyObj.description;
    divPropertyChilds[3].textContent= new Intl.NumberFormat('en-UK',{currency: "EUR", style:"currency"}).format(propertyObj.price);

    mainPhoto.src=propertyObj.mainPhoto;
    const otherInfoChilds = divPropertyChilds[4].children;
    otherInfoChilds[0].textContent=propertyObj.sqmeters + " sqm";
    otherInfoChilds[1].textContent=propertyObj.numRooms + " beds";
    otherInfoChilds[2].textContent=propertyObj.numBaths + " baths";

    btnDel.addEventListener("click", ()=>{
        
        propertiesService.deleteProperty(propertyObj.id);
        principalConatiner.remove();
        
    });

    const divProperties=document.querySelector("div#property-listings");
    divProperties.append(principalConatiner);


}

async function getProperties(){

    try{
        const properties=await propertiesService.getProperties();
        properties.forEach((properties)=>{
            //console.log(porpertie);
            insertTemplate(properties);
        });
    }catch(error){
        alert("Error to load properties: " + error);
    }
}



getProperties();

