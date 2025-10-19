//AndresGiraldoB 2DAW Semipresencial
'use strict';
/**Finally create the file part2.js where we will implement the functionality of
this section. Create an initial array of robots.
We are going to execute this section with node, so we'll take advantage of
the built-in ability to read data from the console to interact with the user. To
create the object that will read user input, we'll need the following code at the
beginning and end of the file */
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { MobileRobot } from "./mobile-robot.class.js";
import { FlyingRobot } from "./flying-robot.class.js";
const r1 = readline.createInterface({ input, output });
// The entire program
const myRobots=[
    new MobileRobot('Wall-E',6),
    new FlyingRobot('IG-11',120),
    new MobileRobot('R2-D2',4),
    new MobileRobot('T-800',20),
    new FlyingRobot('VULTURE-DROID',180),
    new FlyingRobot('HK-AERIAL',200),
];

let running=true;

while(running){
    console.log("============");
    console.log("    Menu   ");
    console.log("============");
    console.log("1) Show Mobile robots");
    console.log("2) Show flying robots");
    console.log("3) Create a robot");
    console.log("4) Move robots");
    console.log("5) Fly robots");
    console.log("6) Show robot info");
    console.log("0) Exit");

    const resp = await r1.question("Something to ask for: ");

    switch(resp){
        case '1':
            /**
             * 1. It will only show the information (toString) of the mobile robots
             */
            console.log("\n-----------");
            console.log("Show Mobile Robots");
            console.log("-----------");

            //const mobileR=myRobots.filter((robot)=> robot instanceof MobileRobot);
            //mobileR.forEach((r)=> console.log(r.toString()));
            myRobots.filter((robot)=> robot instanceof MobileRobot)
                .forEach((robot)=>console.log(robot.toString()));

           

        break;
        case '2':
            /**
             * 2. It will only show information about flying robots.
             */
            console.log("\n-----------");
            console.log("Show Flying Robots");
            console.log("-----------");

            //const mobileR=myRobots.filter((robot)=> robot instanceof MobileRobot);
            //mobileR.forEach((r)=> console.log(r.toString()));
            myRobots.filter((robot)=> robot instanceof FlyingRobot)
                .forEach((robot)=>console.log(robot.toString()));

            
        break;
        case '3':
            /**
             * 3. It will create a robot by asking for the model, type of robot, and,
                depending on the type, the value of its distinctive characteristic. We'll add
                it to the array
             */

            console.log("\n-----------");
            console.log("Create a Robot");
            console.log("-----------");
            const rModel= await r1.question("Robot Model: ");
            const rType=['Mobile Robot','Flying Robot'];
            console.log("Now we will choose the type of robot from available "
                    +"types, remember to indicate the number of the type choose");
            console.log("Available types: ");
            rType.forEach((m,i)=> console.log(`${i} - ${m}`));
            const selectType= await r1.question("Robot Type: ");
            
            switch(selectType){
                case '0':
                    const speedR= await r1.question("Speed: ");
                    //const newMobileR=new MobileRobot(rModel,speedR);
                    //myRobots.push(newMobileR);
                    //add a new MobileRobot to Array 
                    myRobots.push(new MobileRobot(rModel,speedR));
                break;
                case '1':
                    const altitude= await r1.question("Altitude: ");
                    //add a new Flying Robot to Array
                    myRobots.push(new FlyingRobot(rModel,altitude));
                break;
                default:
                    console.log("Error the chosen type is not valid.");
                break;
            }
            
            
            
            
        break;
        case '4':
            /**
             * 4. Call the method move() of the robots that have it (mobile). Don't
                filter or check anything. Use the optional concatenation operator (?.).
             */
            console.log("\n-----------");
            console.log("Move Robots");
            console.log("-----------");

            myRobots.forEach((robot)=> robot.move?.());

            
            
        break;
        case '5':
            /**
             * 5. Same as the previous one but with the method fly()
             */
            console.log("\n-----------");
            console.log("Fly Robots");
            console.log("-----------");

            myRobots.forEach((fRobot)=> fRobot.fly?.());
            
        break;
        case '6':
            /**
             * 6. It will ask for a position in the array to display. It displays information
                about the selected robot (toString) or the message "Robot not found at
                position x" if there is no robot at that position. Don't use any kind of
                checks such as if..else. Instead use the optional concatenation operator
                (?.) and the null coalescence operator (??).
             */
            console.log("\n-----------");
            console.log("Show Robot Info");
            console.log("-----------");

            const indexRobot=await r1.question("Enter th position of the robot you want to see: ");
            const resultRobot= myRobots?.[indexRobot]?.toString() ?? `Robot not found at position ${indexRobot}`;
            console.log(resultRobot);
            
        break;
        case '0':
            running=false;
            console.log("Has chosen to end the program, until next time.");
        break;
        default:
            console.log(`Option ${resp} does not exist.`);
        break;
    }

}



r1.close(); // Finally we close the input/output stream