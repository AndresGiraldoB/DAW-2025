import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { Property } from '../interfaces/property';
import { IntlCurrencyPipe } from '../pipes/intl-currency-pipe';

@Component({
  selector: 'property-card',
  imports: [IntlCurrencyPipe],
  templateUrl: './property-card.html',
  styleUrl: './property-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PropertyCard {
  //input property object display
  property=input.required<Property>();
  //output deleted emit deleting event
  deleted=output<void>();

  //delete Property
  deleteProperty(){
    this.deleted.emit();
  }

}
