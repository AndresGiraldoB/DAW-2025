import { HttpInterceptorFn } from '@angular/common/http';
import { isDevMode } from '@angular/core';

export const baseUrlInterceptor: HttpInterceptorFn = (req, next) => {

  //url servidor isDevMode()
  const serverUrl= isDevMode() ? 'https://api.fullstackpro.es/products-example' : 'localhost:3000';
  //se clonara la peticion y concatenara la url
  const reqClone=req.clone({
    url:`${serverUrl}/${req.url}`,
  });

  //regresamos la url + la url de la peticio
  return next(reqClone);
};
