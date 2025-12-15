import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interfaces/product';

@Pipe({
  name: 'productFilter',
})
//ejemplo de funcionamiento de los Pipes
export class ProductFilterPipe implements PipeTransform {

  //recibiremos un Products[], ...parametrosFiltro -> regresamos ProductFiltrados[]
  transform(products:Product[], search?:string ): Product[] {
    //passamos a lowerCase
    const searchLower=search?.toLocaleLowerCase();
    //expresion ternaria 
    return searchLower 
      //si hay searchLower entonces filtramos el array de productos por su descripcion
      ? products.filter((produc)=> produc.description.toLocaleLowerCase().includes(searchLower))
      //regresamos el mismo array 
      : products;
  }

}
