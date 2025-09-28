//AndresGiraldoB 2DAW semipresencial

import {Robot} from './robot.class.js';
/*Create a file mobile-robot.class.js with the class MobileRobot which will
inherit from Robot and will have:*/
export class MobileRobot extends Robot{
    /*An extra private attribute with the speed it reaches (speed) and its
    corresponding getter.*/
    #speed;
    constructor(model,speed){
        //Robot class
        super(model);
        this.#speed=speed;
    }
    get speed(){
        return this.#speed;
    }
    /*A method move which will display the message (replace values):
    Moving model at speed km/h and will decrease the battery by 20%.*/
    move(){
        console.log(`Moving ${this.model} at ${this.speed} km/h`);
        //decresa 20%
        this.battery= this.battery - 20;
    }
    /*A toString method that will display all the characteristics of the robot
    (including the robot type)*/
    toString(){
        return `Type: Mobile Robot - Model: ${this.model} - Battery: ${this.battery} - Speed ${this.speed} Km/h.`;
    }

}

//const r1=new MobileRobot('XRE123',200);
//console.log(r1.toString());

//r1.move();
//console.log(r1.toString());