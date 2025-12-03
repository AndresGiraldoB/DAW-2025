import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Product } from '../interfaces/product';

@Component({
  selector: 'product-form',
  imports: [FormsModule],
  templateUrl: './product-form.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductForm {
  //add nuevo product para notificar al padre
  add = output<Product>();

  //newProduct
  //propiedades nuevo producto
  newProduct: Product = {
    id: 0,
    description: '',
    available: '',
    imageUrl: '',
    rating: 1,
    price: 0,
  };
  //changeDetector para la imagen del avatar
  #changeDetector=inject(ChangeDetectorRef);

    //recibimos referencia directa al input value
  changeImage(fileinput:HTMLInputElement){
   
    if(!fileinput.files?.length) return;//validamos si se ha seleccionado una imagen
    const reader = new FileReader();
    reader.readAsDataURL(fileinput.files[0]);//pasamos el file
    reader.addEventListener("loadend",()=>{
      this.newProduct.imageUrl=reader.result as string;//imagen url le psasamos el reader.result como string
      this.#changeDetector.markForCheck();
    })
  }
  //addProduct ahora ne gestiona la insercion del product en el array
  addProduct(productForm:NgForm){
    //enviamos al padre una copia del producto a insertar
    this.add.emit({...this.newProduct});
    //limpiamos formularioç
    productForm.resetForm();
  this.newProduct.imageUrl="";//limpiamos input file
  }
}
