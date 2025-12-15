import { Directive, ElementRef, inject, output } from '@angular/core';

@Directive({
  selector: 'input[type=file][encodeBase64]',
  host:{
    '(change)':'encodeFile()'
  }
})
export class EncodeBase64Directive {

  encoded=output<string>();// parametro de salida
  element=inject<ElementRef<HTMLInputElement>>(ElementRef);//referenciamos el elemento html que es un input y usamos elementRef

  //trasformara la imagen en base64
  encodeFile() {
    const fileinput=this.element.nativeElement;//usamos nativeElement
    //comprobaos si existe el fichero adjunto
    if(!fileinput.files?.length){
      //notificamos con emit el nuevo valor de encoded que sera '' al no haber imagen adjunta
      this.encoded.emit("");
      return;
    }
    //si hay fichero adjunto
    const reader=new FileReader();
    reader.readAsDataURL(fileinput.files[0]);
    reader.addEventListener('loadend',()=>{
      this.encoded.emit(reader.result as string);//notificamos el nuevo valor de encoded con emit y pasamos el reader.result como string
    });
  }
  


}
