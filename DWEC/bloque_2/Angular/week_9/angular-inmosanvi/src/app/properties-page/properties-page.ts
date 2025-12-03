import {  ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { Property } from '../interfaces/property';
import {FormsModule} from "@angular/forms";
import { PropertyForm } from '../property-form/property-form';
import { PropertyCard } from '../property-card/property-card';
@Component({
  selector: 'properties-page',
  imports: [PropertyForm, PropertyCard, FormsModule],
  templateUrl: './properties-page.html',
  styleUrl: './properties-page.css',
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class PropertiesPage {


  //array de Properties
  properties=signal<Property[]>([
    {
      id:1,
      province:"Madrid",
      town:"Gavà",
      address:"calle del almirante",
      title:"casa en el centro neuralgico",
      description:"espectacular conexion con todo madrid centro",
      price:199000,
      sqmeters:16,
      numRooms:1,
      numBaths:1,
      mainPhoto:"/images/property2.webp",
    },
    {
      id:2,
      province:"Barcelona",
      town:"Alcorcón",
      address:"calle del pintor Dhali",
      title:"casa artistica en barcelona",
      description:"casa cerca de los museos mas importantes de la ciudad",
      price:200000,
      sqmeters:19,
      numRooms:1,
      numBaths:1,
      mainPhoto:"/images/property1.webp",
    },
  ]);
  
  //contador global id
  idContador=0;


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
    property.id = Math.max(...this.properties().map((p) => p.id!)) + 1;
   this.properties.update((prop)=> [...prop, property]);

  }
  deleteProperty(property:Property ) {
    //se debe regresar un nuevo array
    this.properties.update((prop)=> prop.filter((p)=> p.id !== property.id));
    
  }

}
