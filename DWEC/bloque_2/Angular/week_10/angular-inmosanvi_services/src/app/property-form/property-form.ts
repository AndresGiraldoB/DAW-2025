import { ChangeDetectionStrategy, Component, output, signal } from '@angular/core';
import { Property } from '../interfaces/property';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'property-form',
  imports: [FormsModule],
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
  imagePreview=signal("");


  changeImagen(fileInput: HTMLInputElement) {
    if(!fileInput.files || fileInput.files.length === 0){
      //regresamos mainPhoto ""
      //this.newProperty.mainPhoto="";
      return;
    }
    //si todo va bien
    const reader: FileReader=new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener("loadend",()=>{
      //extraemos el reader.result como string
      //this.newProperty.mainPhoto=reader.result as string;
      this.imagePreview.set(reader.result as string);
      return;
    })
    
  }

  //addProduct emit
  addProperty(productForm:NgForm){
    this.newProperty.mainPhoto=this.imagePreview();
    this.added.emit({...this.newProperty});
    productForm.resetForm();
    this.imagePreview.set("");
    this.newProperty.mainPhoto="";

  }
}
