import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";


document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

//div app 
const appDiv=document.querySelector("div#app") as HTMLDivElement;


//tipado implicito
//aqui el tipo de las variables es definido al asignar un valor implicito
let texto="string implicito";
let numeroEx=3;
let boolExp=false;



//tipado explicito

//variables tipos boolean string number
let myString: string;
let myNumber : number;
let myBool:boolean;
let myArrayNumber:number[];
let myArrayString: Array<string>;


myString="Esto es una string";
myNumber=125;
myBool=false;
myArrayNumber=[1,5,7,9,24,45];
myArrayString=["uno","dos","tres","cuatro"];


myString+=" -- hola";
myNumber=245;
myBool=true;
myArrayNumber.push(99,34,67);
myArrayString.unshift("cinco","seis");


//funciones