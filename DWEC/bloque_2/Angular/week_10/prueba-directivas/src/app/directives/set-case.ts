import { Directive, effect, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: '[setCase]',
  host:{
    '[style.textTransform]':'textCase()'
  }
})
export class SetCase {

  textCase=input.required<string>({alias:'setCase'});
  elementRef=inject<ElementRef<HTMLElement>>(ElementRef)
  constructor() {
      effect(()=> this.elementRef.nativeElement.style.textTransform=this.textCase());
   }

}
