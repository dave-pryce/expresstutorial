var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({ extended: false });

// use getonly middleware
//var getonly = require('./getonly');
//app.use(getonly);

//serve all files in public folder
app.use(express.static('public'));

// cities arrary
var cities = ['Melbourne',
'Sydney',
'Brisbane',
'Adelaide',
'Perth',
'Darwin',
'Hobart',
'Canberra'];


// get request for cities
app.get('/cities', function(request, response){
  if(request.query.search){
    response.json(citySearch(request.query.search));
  }
  else {
    response.json(cities);
  }
});


// create function to filter by city name
function citySearch (keyword) {
  // i case sensitive matching
  var regexp = RegExp(keyword, 'i');
  var result = cities.filter(function (city){
    return city.match(regexp);
  });

  return result;
}



// post request for cities
app.post('/cities', parseUrlencoded, function ( request, response){
  var city = createCity(request.body.name);
  response.status(201).json(city);
})


// function to create city
var createCity = function(name){
  return name;
};



// local host
app.listen(3001, function() {
    console.log("Running Express");
});
