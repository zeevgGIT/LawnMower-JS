const DataObject = require('./DataObject');
var fs = require('fs');
const path = require('path');



// Async reading of data file
//
fs.readFile(path.join(__dirname, '../', 'data_file.txt'), 'utf-8', (err, data) => {

    if (err) {
        console.error('There was an error reading the data file.', err);
        //throw err;
        return;
    }

    // Parsing data fields from file
    //
    const dataObject = new DataObject();
    dataObject.ParseDataFromFile(data);

});

