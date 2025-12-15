import { httpResource, HttpResourceRef } from '@angular/common/http';
import { Injectable, Signal } from '@angular/core';
import { ProvincesResponse } from '../interfaces/responses/provinces-response';
import { TownsResponse } from '../interfaces/responses/towns-response';

@Injectable({
  providedIn: 'root',
})
export class ProvincesService {
  
  #provincesUrl="http://localhost:3000/provinces";

  readonly provincesResource= httpResource<ProvincesResponse>(()=> `${this.#provincesUrl}`, {
    defaultValue:{provinces: [],},
  });
  
  getTownsResource(provinceId:Signal<number> ):HttpResourceRef<TownsResponse>{
    return httpResource<TownsResponse>(
      ()=> `${this.#provincesUrl}/${provinceId()}/towns`,
      {defaultValue:{towns:[]}},
    );
  }

}
