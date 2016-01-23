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

/**
* GET /contacts/:firstname
*/

// 1. Declare a GET route with a param of :firstname
contactRouter.route('/contacts/:firstname')
  .get(function(req, res) {
    // Read the CSV file
    var users = fs.readFileSync('my-list.csv');
    // Parse the CSV and convert to JSON
    var user = Papa.parse(users.toString(), {
     header: true,
     delimiter: ",",
     complete: function(singleContact) {
       //gets the item from the array of objects
       var getUser = function (myArray, prop, value) {
         var i = myArray.length;
         while (i--) {
          if (myArray[i][prop] == value) {
              return myArray[i];
          }
        }
      };

      //Retreiving the data from papaparse
      var users = singleContact.data;

      //Using the get funtcion to get the user by firstname
      var user = getUser(users,'firstname', req.params.firstname);

      if(user != null) {
        res.send(user);
      }
      else {
        //Return 404
        res.status(404).send('Not found');
      }
    }
  });
});

app.use('/', express.static(__dirname + '/'));

app.use('/', contactRouter);


app.listen(port, function() {
  console.log('listening');
});
