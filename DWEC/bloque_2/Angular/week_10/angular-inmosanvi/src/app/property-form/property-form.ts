import { ChangeDetectionStrategy, Component, DestroyRef, effect, inject, output, signal } from '@angular/core';
import { Property } from '../interfaces/property';
import { FormsModule, NgForm } from '@angular/forms';
import { EncodeBase64Directive } from '../directives/encode-base64-directive';
import { ProvincesService } from '../services/provinces-service';
import { PropertyInsert } from '../interfaces/property-insert';
import { PropertiesService } from '../services/properties-service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';


@Component({
  selector: 'property-form',
  imports: [FormsModule,EncodeBase64Directive],
  templateUrl: './property-form.html',
  styleUrl: './property-form.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PropertyForm {
  //service
  #provincesService=inject(ProvincesService);
  #propertiesService=inject(PropertiesService);
  //destryRef
  #destroyRef=inject(DestroyRef);
  //output event
  added=output<Property>();
    //imagePreview signal
  imagePreview=signal("");
  //signal province
  province=signal(0);
  //townResource
  townsResource=this.#provincesService.getTownsResource(this.province);

  //para usar effect y no crear dependencias se usa en el constructor
  constructor(){
    effect(()=>{
      this.province();
      this.newProperty.townId=0;
    });
  }

  //newProperty
  newProperty : PropertyInsert={
     
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

  
  //addProduct emit
  addProperty(productForm:NgForm){

    
    this.newProperty.mainPhoto=this.imagePreview();
  
    this.#propertiesService.addProperty(this.newProperty)
        .pipe(takeUntilDestroyed(this.#destroyRef))
        .subscribe((property)=>{
          this.added.emit(property);
          productForm.resetForm();
          this.imagePreview.set("");
          this.newProperty.mainPhoto="";
          
        });


  }
}
