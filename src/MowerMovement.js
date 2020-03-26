const Movement = require('./Movement');

module.exports =  class MowerMovement extends Movement{
  
    constructor(mowerID, instructions) {
        super(mowerID);
        
        this.mInstructions = instructions;
    }

    


}