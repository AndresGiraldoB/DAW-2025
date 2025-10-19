//AndresGiraldoB
'use strict';
/*Two private attributes (model and battery) with their corresponding
getters. The setter property will have a setter that checks whether the
charge is between 0 and 100, or it will display an error and do nothing.
The constructor will always set the battery to 100 (the model receives
this).*/
export class Robot{
    #model;
    #battery;

    constructor(model){
        this.#model=model;
        this.#battery=100;
    }

    set model(model){
        this.#model=model;
    }
    set battery(battery){
        if(battery < 0 || battery > 100)
            console.error("error the initial battery charge value is incorrect it must be between 0 and 100");
        else
            this.#battery=battery;
    }

    get model(){
        return this.#model;
    }
    get battery(){
        return this.#battery;
    }

    //A charge method that will bring the battery to 100%.
    charge(){
        this.#battery=100;
    }
}

//const r1= new Robot('rxd');
//console.log(r1.battery);
//r1.battery=80;
//console.log(r1.battery);