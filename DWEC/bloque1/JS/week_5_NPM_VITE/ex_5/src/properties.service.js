//AndresGiraldoB DAW semipresencial
import {Http} from "./http.class.js";
import {SERVER} from "./constants.js";


export class PropertiesService{
    #http;
    constructor(){
        this.#http=new Http();
    }

    async getProperties(){
        const resp=await this.#http.get(`${SERVER}/properties`);
        return resp.properties;
    }

    async insertProperty(property){
        const resp=await this.#http.post(`${SERVER}/properties`,property);
        return resp.property;
    }

    deleteProperty(id){
        return this.#http.delete(`${SERVER}/properties/${id}`);
    }
}


/*
async function miFunc() {

    const n={
    title: "Otras prueba nueva",
    description: "Description\nOther line",
    price: 450000,
    address: "Calle de la prueba diferneteeeee",
    sqmeters: 140,
    numRooms: 5,
    numBaths: 3,
    townId: 1010164,
    mainPhoto: "kjnknnkjnkfdlsgkdmgiiejfinskd7fysd7fsni984w84ksmflskdmflksd",
    };
    try{
        const popS= new PropertiesService();
        const resp = await popS.insertProperty(n);
        
        console.log(resp);
    }catch(error){
        console.log("Error to add property: " + error);
    }
}
miFunc();
/*
function Eliminar(){
    try{
        const prp= new PropertiesService();
        prp.deleteProperty(25);
    }catch(error){
        console.error(error);
    }
}

Eliminar();*/