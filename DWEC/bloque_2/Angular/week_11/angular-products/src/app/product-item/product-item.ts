import { DatePipe, UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject, input, output } from '@angular/core';
import { IntlCurrencyPipe } from '../pipes/intl-currency-pipe';
import { Product } from '../interfaces/product';
import { StarRating } from "../star-rating/star-rating";
import { ProductsService } from '../services/products-service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'product-item',
  imports: [DatePipe, UpperCasePipe, IntlCurrencyPipe, StarRating],
  templateUrl: './product-item.html',
  styleUrl: `./product-item.css`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductItem {
  // con input.required<clase>() lo traemos desde el componente padre
  product=input.required<Product>();
  //parametro output comunica al padre desde el hijo lo usaremos para informa al componente padre que un elemento del array se ha eliminado
  deleted=output<void>();

  //showImage
  showImage=input(true);//ponemos un valor por defecto es opcional required obliga al componente padre a pasar el valor del signal o se genera un error

  //servicio ProductService
  #productService=inject(ProductsService);
  //detectar cambios en puntuacion
  #changeDetector = inject(ChangeDetectorRef);
  //destroyRef
  #destroyRef=inject(DestroyRef);

  //funcion deleteProduct
  deleteProduct(){
    //recibimos la notificacion del servicio de que el elemento ha sido eliminado
    this.#productService
        .deleteProduct(this.product().id!)
        .pipe(takeUntilDestroyed(this.#destroyRef))
        .subscribe(()=> this.deleted.emit());//emitimos cambios
  }

  //changeRating

  //metodo para cambiar la calificacion del product
  changeRating(rating:number){
    const oldRating = this.product().rating;//tomamos el rating actual
    this.product().rating=rating; //modificamos antes de la llamada
    
    this.#productService
        .changeRating(this.product().id!, rating)//pasamos productId y rating
        .pipe(takeUntilDestroyed(this.#destroyRef))//le pasamos takeUntilDestroyed a pipe para eliminar el subscribe si se elimina el componente
        .subscribe({
          error: ()=>{// si hay error en la puntuacion (no cambia en el servidor)
            this.product().rating=oldRating;//restauramos la puntuacion
            this.#changeDetector.markForCheck();
          },
        });//se asigna el valor a rating
  }
  

}
