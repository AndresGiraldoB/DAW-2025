import { Province } from "./province";

export interface Town {
    /*{
        "towns": [
        {
            "id": 1030015,
            "name": "l'Atzúbia",
            "longitude": -0.15173035,
            "latitude": 38.84743029,
            "province": 3
        },
        {
            "id": 1030020,
            "name": "Agost",
            "longitude": -0.63891979,
            "latitude": 38.43949316,
            "province": 3
        },
        ...
        ]
    }*/

    id:number;
    name:string;
    longitude:number;
    latitude:number;
    province:Province;
}
