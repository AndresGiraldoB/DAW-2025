//AndresGiraldoB

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
/*miPromesa()
    .then(()=>{
        //que hacemos si todo sale bien
        console.log("Consumiendo el resultado de la promesa...");
    });//pasamos funcion

console.log("Esto es el final del scrip, si lo vez es por que la promesa no detiene el flujo del promgrama mientras espera una respuesta.");*/
//OUTPUT
//Se ha llamado miPromesa ...
//Esto es el final del scrip, si lo vez es por que la promesa no detiene el flujo del promgrama mientras espera una respuesta.
// 9 segundos despues
//Procesando promesa ...
//Consumiendo el resultado de la promesa...

//encadenamiento de then

function numerPromesa(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("LLamada a numero promesas ...");
            resolve(1); //regresamos un entero en este caso el 1
        },3000);//regresaremos el numero en 3 segundos
    });

}
/*
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
*/
    //OUTPUT
    //LLamada a numero promesas ...
    //1
    //2
    //4
/*
  
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

//lamadas en bloque then

numerPromesa()
    .then(sumarUno)
    .then(multiplicarPorDos)
    .catch(mostrarError);
*/
//OUTPUT

//LLamada a numero promesas ...
//antes : 1
//ahora : 2
//antes: 2
//ahora: 4

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
