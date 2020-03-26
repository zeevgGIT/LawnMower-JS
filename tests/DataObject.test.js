var assert = require('assert');
var DataObject = require('../src/DataObject');



function getInstance () {
    return new DataObject();
}

var tests = [

    ['DataObject.js data file parsing', function parserTest() {

        var dataSets = [
`5 5
1 2 N
LFLFLFLFF
3 3 E
FFRFFRFRRF`,
`5 5
1 2 N
GAGAGAGAA
3 3 E
AADAADADDA
1 2 N
GAGAGAGAA`,
`5 5
3 3 Q
AADAADADDA`
        ]


        var e;
        e = getInstance();
//         e.ParseDataFromFile(
// `5 5
// 1 2 N
// GAGAGAGAA
// 3 3 E
// AADAADADDA`
//         );

        //e.ParseDataFromFile(dataSets[0]);
        e.ParseDataFromFile(dataSets[2]);
        //e.ParseDataFromFile(123);

       
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
