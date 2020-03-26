const Position = require('./Position');


module.exports =  class MowerPosition extends Position {
  
    constructor(mowerID, initPosition, direction, rectSize) {
        
        super(mowerID, initPosition);
        
        this.mDirection = direction;
        this.mRectSize = rectSize;

    };
};
