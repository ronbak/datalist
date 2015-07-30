var fs = require('fs');
var path = require('path');
var express = require('express');
var Papa = require('papaparse');
var app = express();

var port = process.env.PORT || 3000;

var contactRouter = express.Router();

/**
 * GET /contacts
 */
contactRouter.route('/contacts')
  .get(function(req, res){
    var data = fs.readFileSync('my-list.csv');

    var obj = Papa.parse(data.toString(), {
     header: true,
     delimiter: ",",
     complete: function(results) {
        res.send(results.data);
     }
    });
  });

contactRouter.route('/contacts/:firstname')
  .get(function(req, res) {

    var users = fs.readFileSync('my-list.csv');

    var user = Papa.parse(users.toString(), {
     header: true,
     delimiter: ",",
     complete: function(results) {
      var findUserByname = function (firstname, callback) {
        if (!results.data[firstname])
          return callback(new Error(
            'No user matching '
             + firstname
            )
          );
      };

      res.send(results.data);
     }
    });
});

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
