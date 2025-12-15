import { Province } from "./province";

export interface Town {
    /*{ server response
        "id": 52,
        "name": "Melilla"
        "longitude": -0.32447488,
        "latitude": 42.6290567,
        "province": {
            "id": 22,
            "name": "Huesca"
        }
    }*/
   id:number,
   name:string,
   longitude?:number,
   latitude?:number,
   province:Province | number,
}
