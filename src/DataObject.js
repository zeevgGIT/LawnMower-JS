'use strict';

const MowerPosition = require('./MowerPosition');
const MowerMovement = require('./MowerMovement');

require('./CoreFunctions');
const LawnMower = require('./LawnMower');

module.exports =  class DataObject {
  
    constructor() {}

    ParseDataFromFile = function (data) {

        let machineCount = 1;
        let mowerID;
        let mowerPosition;
        let mowerMovement;
        let lawnMower
        let position;
        let initPosition;
        let direction;
        let instructions;

        try {


            if (typeof data === 'string') {


                // The first line in the file is the upper right corner of the rectangular lawn
                data = data.split("\n");
                const rectSize = data[0].split(' ').map(c => parseInt(c));
            
                if (rectSize.length != 2) {
                    throw Error('Lawn size fault, Must be in X,Y format.');
                }
            
    

                // Parsing data
                while (machineCount < data.length) {
            
                    mowerID = "Mower_" + machineCount.toString();
                    position = data[machineCount].split(' ');
                    // Direction heading letter
                    direction = position[2];
                    console.log(mowerID + ": started  at: " + position[0].toString() + " " + position[1].toString() + " Heading: " + direction.toString() + "\n" );
                    // Mower current position array (second line in the file)
                    
                    // Current x,y position
                    initPosition = [parseInt(position[0]), parseInt(position[1])];

                    // Read movement instructions -
                    //
                    instructions = data[machineCount + 1].split('');
                    mowerPosition = new MowerPosition(mowerID, initPosition, direction, rectSize);
                    mowerMovement = new MowerMovement(mowerID, instructions);


                    // LawnMower inherits behavior defined in CoreFunctions.js.
                    // 
                    lawnMower = new LawnMower(mowerPosition, mowerMovement);
                    lawnMower.startMoving();
                    console.log(mowerID + ": finished at: " + lawnMower.mX.toString() + " " + lawnMower.mY.toString() + " Heading: " + lawnMower.mDirection.toString() + "\n");
                    
                    // Move to next mower
                    machineCount += 2;
            
                }
            } else {
                throw Error('Invalid/Wrong Type data error.');

            }
        } catch (ex) { 
            throw Error('Exception raised from: ParseDataFromFile ' + ex.toString());
        }

    }
};


// we need to check the final position oof mower 1
// when mower 2 moves


