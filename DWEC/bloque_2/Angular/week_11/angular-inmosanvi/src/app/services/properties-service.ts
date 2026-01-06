import { HttpClient, httpResource } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PropertiesResponse,Property, PropertyInsert, SinglePropertyResponse } from '../interfaces/property';

@Injectable({
  providedIn: 'root',
})
export class PropertiesService {

  #propertiesUrl="properties";
  #http=inject(HttpClient);

  readonly propertiesResource= httpResource<PropertiesResponse>(
    ()=> `${this.#propertiesUrl}`,
    {defaultValue:{properties: []}},
  );

  addProperty(property: PropertyInsert): Observable<Property>{
    return this.#http.post<SinglePropertyResponse>(
      //parametros pasados a post
      this.#propertiesUrl,
      //objeto propertyInsert
      property
    ).pipe(//pipe nos permite compartir entre las funciones dentro de el los valores devueltos por las funciones dentro de pipe
      //map nos permite operar en la respuesta de la peticion como un then
      map((resp)=> resp.property),
    );
  }
 
  deleteProperty(id: number): Observable<void>{
    return this.#http.delete<void>(`${this.#propertiesUrl}/${id}`);
  }
}
