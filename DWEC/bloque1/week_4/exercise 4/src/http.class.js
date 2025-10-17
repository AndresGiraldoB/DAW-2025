//AndresGiraldoB DAW Semipresencial

export class Http{
    async ajax(method,url,body=null){
        //body por defecto null 
        const json=body && !(body instanceof FormData); //bool (si body no es null y no es una instancia de FormData)
        // si body no null y json true {"Content-Type": "application/json"} de lo contrario objeto vacio {}
        const headers=body && json ? {"Content-Type": "application/json"} : {}; 
        //enviamos a fetch url y objeto con method, headers, body, si json true convertimos a JSON  de lo contrario se envia el body
        const resp = await fetch(url, {
            method, 
            headers, 
            body: json ? JSON.stringify(body) : body
        });
        //si la respuesta ok es false lanzamos error y le pasamos respuesta resp.statusText
        if(!resp.ok) throw new Error(resp.statusText);

        //si el codigo de respuesta es diferente a 204 No Content: El servidor procesó la petición con éxito, pero no devuelve ningún contenido.
        if(resp.status != 204){
            return  resp.json();
        }else{
            return null; // si es 204
        }
    }

        // metodos para procesar solicitudes llamamos a funcion asyncrona de nuestra clase http this
    get(url){
        return this.ajax("GET",url);
       
    }
    post(url, body){
        return this.ajax("POST",url,body);
    }
    put(url, body){
        return this.ajax("PUT",url,body);
    }
    delete(url){
        return this.ajax("DELETE",url);
    }
}
