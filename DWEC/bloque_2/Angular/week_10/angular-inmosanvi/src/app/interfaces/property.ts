import { PropertyInsert } from "./property-insert";
import { Town } from "./town";

export interface Property extends Omit<PropertyInsert,"townId">{

/*{ server response GET property/id
    "property": {
        "id": 12,
        "address": "Carretera de la montaña km 45",
        "title": "Rustic Cabin with Breathtaking Views",
        "description": "Discover your personal sanctuary in this charming mountain cabin. Nestled among the pines, this cozy retreat offers stunning panoramic views that will leave you in awe.[1] The interior features warm wood finishes and a stone fireplace, creating the perfect atmosphere for relaxation. Whether you're seeking a weekend getaway or a year-round residence, this mountain home provides an unparalleled connection with nature.",
        "sqmeters": 110,
        "numRooms": 3,
        "numBaths": 2,
        "price": 375000,
        "totalRating": 5,
        "mainPhoto": "http://localhost:3000/img/properties/1760884839113.jpg",
        "createdAt": "2025-10-19T14:40:39.114Z",
        "status": "selling",
        "town": {
            "id": 1220591,
            "name": "Biescas",
            "longitude": -0.32447488,
            "latitude": 42.6290567,
            "province": {
                "id": 22,
                "name": "Huesca"
            }
        },
        "seller": {
            "id": 1,
            "name": "Test user 2",
            "email": "test2@test.com",
            "avatar": "http://localhost:3000/img/users/1755720725032.jpg",
            "lat": 37.423553,
            "lng": -0.654657
        }
    }
}*/
    id:number,
    totalRating:number,
    createdAt:Date,
    status:string,
    town:Town,
    sellet?:{
        id?:number,
        name:string,
        email:string,
        avatar?:string,
        lat?:number,
        lng?:number,
    },


}
