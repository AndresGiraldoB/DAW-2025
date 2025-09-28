//AndresGiraldoB 2DAW Semipresencial
'use strict';
import {Robot} from './robot.class.js';
/*Create a file flying-robot.class.js with the class FlyingRobot which will
inherit from Robot and will have*/
export class FlyingRobot extends Robot{
    /*An extra private attribute with the height it reaches (altitude) and its
    corresponding getter*/
    #altitude;
    
    constructor(model,altitude){
        //Robot class
        super(model);
        this.#altitude=altitude;
    }

    get altitude(){
        return this.#altitude;
    }
    /*A method fly which will display the message (replace values): Flying
    model to altitude meters and will decrease the battery by 50%.*/
    fly(){
        console.log(`Flying ${this.model} to ${this.altitude} meters`);
        //decrease battery 50%
        this.battery= this.battery - 50;
    }
    /*A toString method that will display all the characteristics of the robot
    (including the robot type)*/
    toString(){
        return `Type: Flying Robot - Model: ${this.model} - Battery: ${this.battery} - Altitude: ${this.altitude} meters`;
    }
}

//const re2=new FlyingRobot('MIR345',23);
//console.log(re2.toString());
//re2.fly();
//console.log(re2.toString());