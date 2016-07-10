var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({ extended: false });

// use getonly middleware
//var getonly = require('./getonly');
//app.use(getonly);

//serve all files in public folder
app.use(express.static('public'));


// cities object
var cities = {
  'Melbourne': 'Hipsters',
  'Sydney' : 'Surfers',
  'Brisbane' : 'Vegas',
  'Adelaide' : 'Churches',
};


// get request for cities
app.get('/cities', function(request, response){
    response.json(Object.keys(cities));
});


// get city by name
app.get('/cities/:name', function(request, response){
  var description = cities[request.params.name];
  response.json(description);
});


// read in user params
app.param('name', function( request, response, next){
  request.cityName = (request.params.name);
  next();
});



// create function to filter by city name
//function citySearch (keyword) {
  // i case sensitive matching
//  var regexp = RegExp(keyword, 'i');
//  var result = cities.filter(function (city){
//    return city.match(regexp);
//  });

//  return result;
//}



// post request for cities
app.post('/cities', parseUrlencoded, function ( request, response){
  var newCity = request.body;
  cities[newCity.name] = newCity.description;
  response.status(201).json(newCity.name);
})



// delete
app.delete('/cities/:name', function ( request, response){
  delete cities[request.cityName];
  response.sendStatus(200);
});


// local host
app.listen(3001, function() {
    console.log("Running Express on port 3001");
});
