var path = require('path');
var express = require('express');
var Papa = require('papaparse');
var app = express();

var port = process.env.PORT || 3000;

var contactRouter = express.Router();

/**
 * GET /contacts
 */

// 1. Declare a GET route
contactRouter.route('/contacts')
  .get(function(req, res){
    var responseJson = parser;

    res.send(responseJson);
    console.log(responseJson);
  });

// 2. Read the CSV file
var data = 'my-list.csv';

var parser = Papa.parse(data, {
    header: true,
    delimiter: ",",
    complete: function(results) {
       console.log(results.data);
    }
});


// 3. Parse the CSV and convert to JSON
// 4. Return the JSON response of that parsed CSV

/**
 * GET /contacts/:firstname
 */

// 1. Declare a GET route with a param of :firstname
// 2. Read the CSV file
// 3. Parse the CSV and convert to JSON
// 4. Find the record for that particular :firstname
// 5. Return JSON
// 6. If :firstname was not found in the CSV, return 404


app.use('/', contactRouter);

app.get('/', function(req, res){
  res.send('Welcome to my API');
});

app.listen(port, function() {
  console.log('listening');
});
