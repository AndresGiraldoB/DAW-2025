import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { Property } from '../interfaces/property';
import { FormsModule, NgForm } from '@angular/forms';
import { EncodeBase64Directive } from '../../directives/encode-base64-directive';

@Component({
  selector: 'property-form',
  imports: [FormsModule, EncodeBase64Directive],
  templateUrl: './property-form.html',
  styleUrl: './property-form.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PropertyForm {
  //output event
  added=output<Property>();
  //newProperty
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
  //imagePreview signal
  //imagePreview=signal("");
  //addProduct emit
  addProperty(productForm:NgForm){
    //this.newProperty.mainPhoto=this.imagePreview();
    this.added.emit({...this.newProperty});
    productForm.resetForm();
    //this.imagePreview.set("");
    this.newProperty.mainPhoto="";

  }
}
