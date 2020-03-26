'use strict';

const DIRECTIONS = ['N', 'E', 'S', 'W'];


module.exports =  class CoreFunctions {
  
    // Populating the Mower object fields
    //
    constructor (mowerPosition, mowerMovement) {
        this.mId = mowerPosition.mId;
        this.mX = mowerPosition.mX;
        this.mY = mowerPosition.mY;
        this.mInstructions = mowerMovement.mInstructions;
        this.mRectSize = mowerPosition.mRectSize;
        this.mDirection = mowerPosition.mDirection;
    }


    // Perform move instructions
    //
    startMoving = function () {
        
        this.mInstructions.forEach(function(c) {
            switch(c) {
                case 'L':
                this.TurnLeft();
                break;
                case 'R':
                this.TurnRight();
                break;
                case 'F':
                this.MoveForward();
                break;
                default:
                  console.log("Illegal Case");
                break;
            }
        }.bind(this));
    }

    TurnLeft  = function () {
        this.mDirection = this.Rotate('left');
    }
    
    TurnRight = function () {
        this.mDirection = this.Rotate('right');
    }

    // Moving forward if it is a valid move
    //
    MoveForward = function () {
        switch(this.mDirection) {
          case 'N':
            if (this.isValidStep(this.mX, this.mY + 1)) { this.mY += 1 }
            break;
          case 'E':
            if (this.isValidStep(this.mX + 1, this.mY)) { this.mX += 1 }
            break;
          case 'S':
            if (this.isValidStep(this.mX, this.mY - 1)) { this.mY -= 1 }
            break;
          case 'W':
            if (this.isValidStep(this.mX - 1, this.mY)) { this.mX -= 1 }
            break;
          default:
            break;

        }
      }
      

    // Checking position is within the rectangle bounds
    isValidStep = function (x, y) {
        return x >= 0 && x <= this.mRectSize[0] && y >= 0 && y <= this.mRectSize[1];
    }

    Rotate = function (direction) {
        let index = DIRECTIONS.indexOf(this.mDirection);

        // ilegal value
        if (index < 0) return;

        if (direction === 'left') return index > 0 ? DIRECTIONS[index - 1] : DIRECTIONS[DIRECTIONS.length - 1];
        if (direction === 'right') return index === DIRECTIONS.length - 1 ? DIRECTIONS[0] : DIRECTIONS[index + 1];
      }



 
      get position ()  {
        return `${this.mX} ${this.mY} ${this.mDirection}`
    }

}

     
