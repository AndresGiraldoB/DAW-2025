import {  ChangeDetectorRef, Component, inject } from '@angular/core';
import { Property } from '../interfaces/property';
import {FormsModule, NgForm} from "@angular/forms";
@Component({
  selector: 'properties-page',
  imports: [FormsModule],
  templateUrl: './properties-page.html',
  styleUrl: './properties-page.css',
})
export class PropertiesPage {


  //changeDetectorRef
  #changeDetector=inject(ChangeDetectorRef);
  //array de Properties
  properties:Property[]=[];
  //contador global id
  idContador=0;

  //object newPropert with empty fields and not id
  newProperty: Property={
    province:"",
    town:"",
    address:"",
    title:"",
    description:"",
    price:0,
    sqmeters:0,
    numRooms:0,
    numBaths:0,
    mainPhoto:"",

  };


  changeImagen(fileInput: HTMLInputElement) {
    if(!fileInput.files || fileInput.files.length === 0){
      //regresamos mainPhoto ""
      this.newProperty.mainPhoto="";
      return;
    }
    //si todo va bien
    const reader: FileReader=new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener("loadend",()=>{
      //extraemos el reader.result como string
      this.newProperty.mainPhoto=reader.result as string;
      this.#changeDetector.markForCheck();//marcamos como dirty
      return;
    })
    
  }

  addProperty(propertyForm:NgForm){
   

    this.newProperty.id=this.idContador;
    this.idContador++;
    //clonar objeto
    this.properties.push({...this.newProperty});

    propertyForm.resetForm();//limpiamos formulario
    this.newProperty.mainPhoto="";//limpiamos mainPhoto

  }
  deleteProperty(propertyId?:number ) {
    this.properties=this.properties.filter((p)=> p.id !== propertyId);
    
  }

}
