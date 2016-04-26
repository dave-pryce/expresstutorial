var express = require('express');
var app = express();

// use getonly middleware
var getonly = require('./getonly');
app.use(getonly);

//serve all files in public folder
app.use(express.static('public'));


// get request for cities
app.get('/cities', function(request, response){
  var cities = ['Melbourne', 'Sydney', 'Brisbane','Adelaide','Perth','Darwin','Hobart'];
  response.json(cities);
});


// local host
app.listen(3001, function() {
    console.log("Running Express");
});
