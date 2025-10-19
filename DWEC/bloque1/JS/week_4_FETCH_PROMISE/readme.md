<h1>Promesas</h1>
Una promesa es un objeto de la clase promise, se crea para resolver una acción asíncrona,
con ello no detendremos el flujo del programa esperando una respuesta de un recurso, por el
contrario el flujo del programa continua mientras esperamos esa respuesta.
Su contructor recibe una funcion con dos parametros <strong>resolve</strong> <strong>reject</strong>
estos a su vez son funciones.
Para consumir el resultado de una promesa, lo hacemos llamando al metodo <strong>then</strong>,
a este le psaremos una función para procesar el resultado, esto lo hara si el resultado de la promesa
es positivo, en caso de ser un error sera manejado en el metodo <strong>catch</strong>

-resolve se llama cuando la accion se ha ejecutado correctamente y opcionalmente podemos devolver un dato.
-reject se llama cuando la accion ha generado un error

<pre>
<code>
function miPromesa(){
    //regresamos una promesa
    return new Promise((resolve, reject)=>{
        console.log("Se ha llamado miPromesa ...");
        setTimeout(()=>{
            console.log("Procesando promesa ...");
            //promesa resulta
            resolve();
        },9000);

    });
}

//lamada y consumo de una promesa
miPromesa()
    .then(()=>{
        //que hacemos si todo sale bien
        console.log("Consumiendo el resultado de la promesa...");
    });//pasamos funcion

console.log("Esto es el final del scrip, si lo vez es por que la promesa no" 
    + "detiene el flujo del promgrama mientras espera una respuesta.");

//OUTPUT
//Se ha llamado miPromesa ...
//Esto es el final del scrip, si lo vez es por que la promesa no detiene el flujo del promgrama mientras espera una respuesta.
// 9 segundos despues
//Procesando promesa ...
//Consumiendo el resultado de la promesa...

</code>
</pre>

El bloque then puede a su vez regresar otra promesa y por ello podemos concatenar varias llamadas <strong>then</strong>
cada uno de los siguientes recibe el objeto devuelto por el <strong>then</strong> anterior

<pre>
<code>
numerPromesa()//regresa numero 1
    .then((numero)=> {
        console.log(numero);
        return numero + 1; // aqui regresamos el dato
    })
    .then((numero)=>{
         //aqui estamos modificando el valor del resultado del then anterior
        console.log(numero);
        return numero * 2;
    })
    .then((numero)=>{
        // aqui modificamos nuevamente el dato que recogimos y pasamos desde el primer thn
        console.log(numero);
    })
    .catch((error)=> console.log("Error en la promesa " + error)); // si algo sale mal saltara el catch y se procesara el error

    //OUTPUT
    //LLamada a numero promesas ...
    //1
    //2
    //4
</pre>
</code>

Opcionalmente podemos separar las funciones del bloque <strong>then</strong> o <strong>catch</strong>, esto
viene bien por temas de legibilidad y reutilización

<pre>
<code>
function sumarUno(respuesta){
    console.log("antes : "+respuesta);
    const datoMod=respuesta + 1;
    console.log("ahora : "+datoMod);
    return datoMod;
}
function multiplicarPorDos(respuesta){
    console.log("antes: "+respuesta);
    const dataMod=respuesta ** 2;
    console.log("ahora: "+dataMod);
    return dataMod;
}

function mostrarError(err){
    console.log("La respuesta no fue exitosa el motivo: " +  err);
}

//lamada de funciones en bloque then o catch

numerPromesa()
    .then(sumarUno)
    .then(multiplicarPorDos)
    .catch(mostrarError);

//OUTPUT
//LLamada a numero promesas ...
//antes : 1
//ahora : 2
//antes: 2
//ahora: 4
</code>
</pre>



<h2>async/await</h2>
<pre>
Esta sintaxis nos permite de forma mas legible usar las promesas y sus respuestas.
<strong>await</strong> espera a que la respuesta termine y usar el valor regresado por la promesa.
este palabra reservada tiene un pequeño problema, que al ser usada el flujo del programa se detiene
hasta que se resulva la promesa, es po esto que solo debemos usarlas dentro de funciones <strong>asíncronas</strong>
declaradas con la palabra reservada <strong>async function</strong>, estas funciones asíncronas se ejecutan
sin detener el flujo del programa.
</pre>

<pre>
<code>
function promesaBatidoFrutas(fruta, tamanyo="mediano", azucar="poca"){
    if(!fruta){
        return Promise.reject("Es imposible crear el batido sin la fruta");
    }
    
    return new Promise((resolve,reject)=>{
        console.log("Preparando batido de fruta...");
        setTimeout(()=>{
            resolve("Batido "+ tamanyo + " de " + fruta + " con " + azucar + " de azucar");
        },3000);
    });

}

async function pedirBatido(b_fruta,b_tamanyo,b_azucar){
    try{
        const batidoNuevo = await promesaBatidoFrutas(b_fruta,b_tamanyo,b_azucar);
        console.log(batidoNuevo);
    }catch(error){
        console.log(error);
    }
}

console.log("Inicio de batido de fruta...");
pedirBatido("fresa","grande","extra 1");
console.log("Mensaje que demuestra que el flujo continúa hasta que obtengamos el batido...");

//Inicio de batido de fruta...
//Preparando batido de fruta...
//Mensaje que demuestra que el flujo continúa hasta que obtengamos el batido...
//Batido grande de fresa con extra 1 de azucar
</code>
</pre>
