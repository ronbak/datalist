var path = require('path');
var express = require('express');
var papaparse = require('papaparse');
var app = express();

// Require paparase

/**
 * GET /contacts
 */

// 1. Declare a GET route
// 2. Read the CSV file
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

app.use(express.static(path.resolve(__dirname)));

app.listen(3000, function() {
  console.log('listening');
});
