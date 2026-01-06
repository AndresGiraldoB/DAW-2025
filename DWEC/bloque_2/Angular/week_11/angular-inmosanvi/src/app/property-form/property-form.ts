import { ChangeDetectionStrategy, Component, DestroyRef, effect, inject, output, signal } from '@angular/core';
import { Property } from '../interfaces/property';
import { FormsModule, NgForm } from '@angular/forms';
import { PropertyInsert } from '../interfaces/property';
import { PropertiesService } from '../services/properties-service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ProvincesService } from '../services/provinces-service';
import { JsonPipe } from '@angular/common';
import { EncodeBase64Directive } from '../directives/encode-base64-directive';


@Component({
  selector: 'property-form',
  imports: [FormsModule,EncodeBase64Directive,JsonPipe],
  templateUrl: './property-form.html',
  styleUrl: './property-form.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PropertyForm {
  //output event
  added=output<Property>();
  //services and resources
  #propertiesService=inject(PropertiesService);
  #provincesService=inject(ProvincesService);
  //signal province
  province=signal<number>(0);
  //resources
  readonly provincesResource= this.#provincesService.provincesResource; //obtenemos las provincias
  readonly townsResource=this.#provincesService.getTownsResource(this.province);//pasamos id provincia
  //destroyRef
  #destroyRef=inject(DestroyRef);

  

  //newProperty
  newProperty: PropertyInsert={
     
      townId:0,
      address:"",
      title:"",
      description:"",
      price:0,
      sqmeters:0,
      numRooms:0,
      numBaths:0,
      mainPhoto:"",
  };
  //addProduct 
  addProperty(productForm:NgForm){
    //solucion para corregir tipos de entrada de input
    this.newProperty.townId=Number(this.newProperty.townId);
    //llamada al servicio
    this.#propertiesService
      .addProperty(this.newProperty)//pasamos el objeto nuevo a añadir
      .pipe(takeUntilDestroyed(this.#destroyRef))//para eliminar una vez añadido el nuevo elemento
      .subscribe((property)=>{
        this.added.emit(property);//emitimos el producto devuelto por la peticion 
        productForm.resetForm();
        this.newProperty.mainPhoto="";//limpiamos el campo mainPhoto
      })

  }

  //constructor para usar effect
  constructor(){
    //cada que se cambie de provincia se cargan las poblaciones
    //effect se encargara de realizar los cambios de towns cuando cambie el province
    effect(()=>{
      //lamada a province oara crear dependencia
      this.province();
      this.newProperty.townId=0;//ponemos a 0 el town id
    });
  }

}
