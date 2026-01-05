import { HttpInterceptorFn } from '@angular/common/http';

export const baseUrlInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  const serverUrl="http://localhost:3000";
  //clonamos la request para insertar informacion nueva
  const reqclone = req.clone({
    //modificamos url concatenando la url del servidor con la ulrde la peticion
    url: `${serverUrl}/${req.url}`,
  });
  return next(reqclone);//regresamos la nueva url modifcada
};
