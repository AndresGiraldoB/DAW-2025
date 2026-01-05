import { httpResource, HttpResourceRef } from '@angular/common/http';
import { Injectable, Signal } from '@angular/core';
import { ProvincesResponse } from '../interfaces/responses/provinces-response';
import { TownsResponse } from '../interfaces/responses/towns-response';

@Injectable({
  providedIn: 'root',
})
export class ProvincesService {
  //http://localhost:3000/
  #provincesUrl="provinces";
  //httpClient  #http=inject(HttpClient);
  readonly provincesResource=httpResource<ProvincesResponse>(
    //funcion loader
    ()=> `${this.#provincesUrl}`,
    //valor por default
    {defaultValue: {provinces: []}} ,//valor por defecto array vacio
  );


  getTownsResource(provinceId:Signal<number>):HttpResourceRef<TownsResponse>{
    return httpResource<TownsResponse>(
      ()=> provinceId() ? `${this.#provincesUrl}/${provinceId()}/towns` : undefined,
      {defaultValue:{towns:[]}},//regresamos array towns vacio
    );
  }
  
}
