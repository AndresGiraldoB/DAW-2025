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
  readonly propertiesResource = this.#propertiesService.propertiesResource;

  //array de Properties
  properties= linkedSignal(()=> this.propertiesResource.value().properties); //properties ahora es un linkedSignal que toma valor de this.propertiesResource.value()

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
   this.properties.update((prop)=> [...prop, property]);

  }
  deleteProperty(property:Property ) {
    //se debe regresar un nuevo array
    this.properties.update((prop)=> prop.filter((p)=> p.id !== property.id));
    
  }

}
