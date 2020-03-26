// module.exports =  class Position {
  
//     constructor(mowerID, initPosition) {
        
//         this.mId = mowerID;
//         this.mX = initPosition[0];
//         this.mY = initPosition[1];

//     }


//     // Parent class method
//     // ParentClass.prototype.methodName = function(par) {
//     //     console.log('Parent method implementation: methodName("' + par + '")');
//     // };

//     Position.prototype.printName  = function(name) {

//         console.log(name);

//     };


// };


    function Position(mowerID, initPosition) {
        
        this.mId = mowerID;
        this.mX = initPosition[0];
        this.mY = initPosition[1];

    }


    // Parent class method
    // ParentClass.prototype.methodName = function(par) {
    //     console.log('Parent method implementation: methodName("' + par + '")');
    // };

    Position.prototype.printName  = function(name) {

        console.log(name);

    }

    module.exports =  Position;