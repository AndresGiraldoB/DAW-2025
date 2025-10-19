//AndresGiraldoB DAW Semipresencial
 import {Http} from "./http.class.js";
 import {SERVER} from "./constants.js";

export class ProvincesService{
    #http;
    constructor(){
        this.#http=new Http();
    }

    async getProvinces(){
        const resp = await this.#http.get(`${SERVER}/provinces`);
        return resp.provinces;
    }

    async getTowns(id){
        const resp=await this.#http.get(`${SERVER}/provinces/${id}/towns`);
        return resp.towns;
    }
}
