import { ChangeDetectionStrategy, Component, linkedSignal, model } from '@angular/core';

@Component({
  selector: 'star-rating',
  imports: [],
  templateUrl: './star-rating.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StarRating {

  rating= model.required<number>();//model parametro de entrada salida entre padres e hijos
  auxRating=linkedSignal(()=>this.rating());
  
}
