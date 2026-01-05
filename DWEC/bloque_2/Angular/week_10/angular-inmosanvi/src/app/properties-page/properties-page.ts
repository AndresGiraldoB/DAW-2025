import {  ChangeDetectionStrategy, Component, computed, inject, linkedSignal, signal } from '@angular/core';
import { Property } from '../interfaces/property';
import {FormsModule} from "@angular/forms";
import { PropertyForm } from '../property-form/property-form';
import { PropertyCard } from '../property-card/property-card';
import { PropertiesService } from '../services/properties-service';
@Component({
  selector: 'properties-page',
  imports: [PropertyForm, PropertyCard, FormsModule],
  templateUrl: './properties-page.html',
  styleUrl: './properties-page.css',
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class PropertiesPage {
  //services and resources
  readonly #propertiesService=inject(PropertiesService);
  readonly propertiesResources=this.#propertiesService.propertiesResource;

  //array de Properties ahora es un linkedSignal se vincula al valor del resource
  properties=linkedSignal(()=> this.propertiesResources.value().properties);
  

  search=signal("");
  province=signal("");

  //computed signal
  filteredProperties=computed(()=>{
    return this.search() ?
      this.properties().filter((property)=> {
        return property.description.toLocaleLowerCase().includes(this.search().toLocaleLowerCase()) ||  
                  property.title.toLocaleLowerCase().includes(this.search().toLocaleLowerCase())
      }) :
      this.properties();
        
  });


  addProperty(property:Property){
    //no se necesita generar el id
   this.properties.update((prop)=> [...prop, property]);//clonar el array de propiedades y añadimos al final nuevaPropiedad

  }
  deleteProperty(property:Property ) {
    //se debe regresar un nuevo array
    this.properties.update((prop)=> prop.filter((p)=> p.id !== property.id));
    
  }

}
