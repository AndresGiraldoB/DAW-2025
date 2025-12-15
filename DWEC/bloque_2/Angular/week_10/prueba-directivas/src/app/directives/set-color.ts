import { Directive, effect, ElementRef, inject, input, signal } from '@angular/core';

@Directive({
  selector: '[setColor]',
  //vincular valor de la propiedad al color de fondo
  host:{
    '[style.backgroundColor]':'color()',
    '[style.color]':"textColor()",
    '(click)':'toggleTextoColor()',
  },
})
export class SetColor {
  color= input.required<string>({alias:'setColor'});
  textColor=signal("black");
  elementRef=inject<ElementRef<HTMLElement>>(ElementRef);

  constructor() { 
    effect(()=>this.elementRef.nativeElement.style.backgroundColor=this.color());
  }

  toggleTextoColor(){
    this.textColor.update((color)=> color === 'black' ? 'white' : 'black')
  }
}
