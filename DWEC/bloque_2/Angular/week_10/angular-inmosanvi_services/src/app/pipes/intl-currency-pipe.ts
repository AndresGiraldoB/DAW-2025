import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'intlCurrency',
})
export class IntlCurrencyPipe implements PipeTransform {

  transform(price: number, currency:string, language:string, maximumFractionDigits=0): string {
    return new Intl.NumberFormat(language,{style:"currency",currency, maximumFractionDigits }).format(price);
  }

}
