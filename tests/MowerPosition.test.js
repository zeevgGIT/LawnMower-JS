var assert = require('assert');
var MowerPosition = require('../src/MowerPosition')


function getInstance () {
    return new MowerPosition();
}

var tests = [

    ['MowerPosition.js testing', function constructorTest() {

        
        //constructor(mowerID, initPosition, direction, rectSize) {
        var e;
        //e = getInstance();

        e = new MowerPosition("Mower1","1 2", "W", "GAGAGAGAA", [5, 5])
        assert.equal(e.mDirection, "W");
        
        e = new MowerPosition("Mower1","1 2", "W", "GAGAGAGAA", [5, 5])
        e = new MowerPosition("Mower1","1 2", "G", "XXCCC", [-5, 500])
        
        //assert.equal(e.mX, 1);
        //assert.equal(e.mY, 2);
       // assert.equal(e.mDirection, "W");
        
        
        // assert.equal(e.limits.x.min, 0);
        // assert.equal(e.limits.x.max, 5);
        // assert.equal(e.limits.y.min, 0);
        // assert.equal(e.limits.y.max, 5);
    
    
        
       
    }],

     


  

]

    tests.forEach(function (test) {
        var outStr = test[0].padEnd(80, '.');
        try {
            test[1].call();
            outStr += 'OK';
        } catch (e) {
            outStr += 'FAIL (with message : ' + e.message + ')';
        }
        console.log(outStr)
    })
