import { DatePipe, UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { IntlCurrencyPipe } from '../pipes/intl-currency-pipe';
import { Product } from '../interfaces/product';
import { StarRating } from "../star-rating/star-rating";

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
  delete=output<void>();

  //showImage
  showImage=input(true);//ponemos un valor por defecto es opcional required obliga al componente padre a pasar el valor del signal o se genera un error

  //funcion deleteProduct
  deleteProduct(){
    //lanzaremos el evento para notificar al padre
    this.delete.emit();
  }

  

}
