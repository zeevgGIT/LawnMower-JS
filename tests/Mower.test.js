var assert = require('assert');
var MowerMovement = require('../src/MowerMovement')
var MowerPosition = require('../src/MowerPosition')
var Mower = require('../src/Mower')



function getInstance () {
    return new Mower();
}


var tests = [
    ['Mower.js object init test', function constructionTest() {
        
        t_movement = new MowerMovement("1","TTTT");
        assert.equal(t_movement.mId, "1");
        assert.equal(t_movement.mInstructions, "TTTT");

        t_position = new MowerPosition("3", [3, 4]);
        assert.equal(t_position.mId, "3");
        assert.equal(t_position.mX, "3");
        assert.equal(t_position.mY, "4");


        t_mower = new Mower(t_position, t_movement);
        assert.equal(t_mower.mId, "3");


        // assert.equal(m.mId, "1");
        

         
        
        // e = new Mower(m,p)
        // //e.MoveForward();
        // e.Rotate("DDDD");

        // assert.equal(e.position.x, 1);
        // assert.equal(e.position.y, 2);
        // assert.equal(e.orientation, 0);
        // assert.equal(e.ordersString, 'GAGAGAGAA');
        // assert.equal(e.orderIndex, 0);
        // assert.equal(e.limits.x.min, 0);
        // assert.equal(e.limits.x.max, 5);
        // assert.equal(e.limits.y.min, 0);
        // assert.equal(e.limits.y.max, 5);

        // e = new Mower('4 11 S', 'DGADGAGDA', 20, 12)
        // assert.equal(e.position.x, 4);
        // assert.equal(e.position.y, 11);
        // assert.equal(e.orientation, 1);
        // assert.equal(e.ordersString, 'DGADGAGDA');
        // assert.equal(e.limits.x.min, 0);
        // assert.equal(e.limits.x.max, 20);
        // assert.equal(e.limits.y.min, 0);
        // assert.equal(e.limits.y.max, 12);

        // e = new Mower('14 7 E', 'DGADGAGDA', 20, 12)
        // assert.equal(e.position.x, 14);
        // assert.equal(e.position.y, 7);
        // assert.equal(e.orientation, 2);

        // e = new Mower('14 7 N', 'DGADGAGDA', 20, 12)
        // assert.equal(e.orientation, 3);
    }]]

    
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
