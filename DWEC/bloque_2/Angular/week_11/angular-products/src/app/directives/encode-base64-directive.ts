import { Directive, ElementRef, inject, output } from '@angular/core';

@Directive({
  selector: 'input[type=file][encodeBase64]',
  host:{
    '(change)':'encodeFile()',
  },
})
export class EncodeBase64Directive {

  encoded=output<string>();
  element=inject<ElementRef<HTMLInputElement>>(ElementRef);

  encodeFile(){
    const fileInput=this.element.nativeElement;
    //si no hay fichero subido
    if(!fileInput.files?.length){
      //regresamos valor vacio
      this.encoded.emit('');
      return;
    }

    const reader=new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('loadend', ()=>{
      //regresamos imagen como string
      this.encoded.emit(reader.result as string);
    })
  }

}
