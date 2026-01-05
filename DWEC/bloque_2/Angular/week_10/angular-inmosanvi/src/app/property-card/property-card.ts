import { ChangeDetectionStrategy, Component, DestroyRef, inject, input, output } from '@angular/core';
import { Property } from '../interfaces/property';
import { IntlCurrencyPipe } from '../pipes/intl-currency-pipe';
import { PropertiesService } from '../services/properties-service';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

@Component({
  selector: 'property-card',
  imports: [IntlCurrencyPipe],
  templateUrl: './property-card.html',
  styleUrl: './property-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PropertyCard {
  //service and resources
  #propertiesServices=inject(PropertiesService);
  //destroyRef
  #destroyRef=inject(DestroyRef);
  //input property object display
  property=input.required<Property>();
  //output deleted emit deleting event
  deleted=output<void>();

  //delete Property
  deleteProperty(){
    this.#propertiesServices
      .deleteProperty(this.property().id!)//llamada al metodo delete del service
      .pipe(takeUntilDestroyed(this.#destroyRef))//lamada al metodo pipe para pasarle el detroyRef
      .subscribe(()=> this.deleted.emit());//nos suscribimos para obtener los resultados y  emitimos la notificacion al componente padre de elemento eliminado
  }

}
