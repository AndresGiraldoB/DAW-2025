export interface Province {
/*"provinces": [
{
"id": 1,
"name": "Araba/Álava"
},
{
"id": 2,
"name": "Albacete"
},
{
"id": 3,
"name": "Alacant/Alicante"
},
...
]*/

    id:number;
    name:string;
}

export interface ProvincesResponse {
    provinces:Province[];
}
