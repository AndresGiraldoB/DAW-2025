import { Directive, ElementRef, inject, output } from '@angular/core';

@Directive({
  selector: 'input[type=file][encodeBase64Directive]',
   /*evento : llamadaFuncion*/
  host:{
   
    '(change)':'encodeFile()',
  }
})
export class EncodeBase64Directive {

  encoded=output<string>();//para regresar la imagen en base 64
  element=inject<ElementRef<HTMLInputElement>>(ElementRef);//injectamos elementRef y tipamos inject<ElementRef<HtmlTipoElemento>>(ElementRef)

  //funcion para codificar imagen a base64
  encodeFile(){
    const fileInput=this.element.nativeElement; //usamos nativeElement
    //comprobamos si no se carga file
    if(!fileInput.files?.length){
      //notificamos cambios en el output encoded
      this.encoded.emit("");//regresamos cadena vacia si no hay file
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    //evento loadend
    reader.addEventListener("loadend",()=> {
      this.encoded.emit(reader.result as string);
    });//notificamo con emit el valor del reader como string
  }

}
