import { HttpClient, httpResource } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { PropertiesResponse } from '../interfaces/responses/properties-response';
import { PropertyInsert } from '../interfaces/property-insert';
import { Property } from '../interfaces/property';
import { map, Observable } from 'rxjs';
import { SinglePropertyResponse } from '../interfaces/responses/single-property-response';

@Injectable({
  providedIn: 'root',
})
export class PropertiesService {
  
  #propertiesUrl="http://localhost:3000/properties";
  #http=inject(HttpClient);

  public readonly propertiesResource= httpResource<PropertiesResponse>(
    ()=> `properties`,
    {defaultValue: {properties:[]}}
  );

  addProperty(property:PropertyInsert):Observable<Property>{
    return this.#http.post<SinglePropertyResponse>(this.#propertiesUrl,property)
      .pipe(//nos permite usar el valor devuelto de las funciones dentro de esta
        map((resp)=>resp.property),//nos permite manipular la respuesta del servidor como un then
      );
  }

  deleteProperty(id:number):Observable<void>{
    //el servidor respondera void si todo esta bien
    return this.#http
      .delete<void>(`${this.#propertiesUrl}/${id}`);
  }
  
}
