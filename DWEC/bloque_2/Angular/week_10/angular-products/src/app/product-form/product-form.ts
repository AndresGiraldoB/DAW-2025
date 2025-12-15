import { ChangeDetectionStrategy, Component, DestroyRef, inject, output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Product } from '../interfaces/product';
import { EncodeBase64Directive } from '../directives/encode-base64-directive';
import { ProductsService } from '../services/products-service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'product-form',
  imports: [FormsModule,EncodeBase64Directive],
  templateUrl: './product-form.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductForm {
  //add nuevo product para notificar al padre
  add = output<Product>();
  //services
  #productService=inject(ProductsService);
  #destroyRef=inject(DestroyRef)

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


  //addProduct ahora no gestiona la insercion del product en el array
  addProduct(productForm:NgForm){
    //cambiamos el metodo 
    //ahora llamamos al servicio
    this.#productService
      .insertProduct(this.newProduct)
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe((product)=>{
        this.add.emit(product); //emitimos el producto con id devuelto por el servidor
        productForm.resetForm();//limpiamos los atributos de newProduct
        this.newProduct.imageUrl="";//limpiamos la imagen que no esta vinculada al formulario
      })
  }
}
