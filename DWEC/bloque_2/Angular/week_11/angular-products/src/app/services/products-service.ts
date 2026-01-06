import { inject, Injectable, Signal } from '@angular/core';

import { HttpClient, httpResource } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ProductsResponse, SingleProductResponse } from '../interfaces/responses/products-response';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  //url base -->https://api.fullstackpro.es/products-example/
  #productUrl="products";
  //creamos variable donde injectamos objeto http
  #http=inject(HttpClient);
  //Resource compartiddo por toda la applicacion
  readonly productsResource=httpResource<ProductsResponse>(()=> 'products'/*url*/,{//parametros
    defaultValue:{products:[]},//valor devuelto por defecto ya que por defecto es undefined mientras carga los datos
  })

  /*cambios en metodos
  //en getProducts regresamos un Observable <Product[]>
  getProducts():Observable<Product[]>{
    return this.#http
        //tipamos el objeto a regresar
        .get<ProductsResponse>(`${this.#productUrl}`)//pasamos la ruta
        //map metodo de rxjs que seria igual a un then transforma el valor que dvuelve el servidor
        .pipe(map((resp)=>resp.products))//metodo pipe que nos permite que las funciones dentro de este compartan el objeto regresado
        //map metodo de rxjs
  }*/


  //resource en base a su id
  getProductIdResource(id:Signal<number>){
    return httpResource<SingleProductResponse>(()=>(
      id() ? `products/${id}`:undefined // Cuando es undefined no lanza petición http
    ));
  }

  //camhio de puntuacion
  changeRating(idProduct:number, rating:number):Observable<void>{//regresamos siempre observable para poder desde donde se inyecta crear subscribe

    //regresamos un observable void
    return this.#http.put<void>(`${this.#productUrl}/${idProduct}/rating`,{
      rating:rating,
    });
  }

  //insertar producto
  insertProduct(product:Product):Observable<Product>{
    return this.#http.post<SingleProductResponse>(this.#productUrl, product)//peticion post
        .pipe(//pipe para manipular respuesta del server
          map((resp)=> resp.product),
        );
  }

  //eliminar producto
  deleteProduct(id:number):Observable<void>{
    return this.#http
        //el servidor regresa respuesta vacia
        .delete<void>(`${this.#productUrl}/${id}`);
  }
  
}
