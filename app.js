var express = require('express');
var app = express();

// use getonly middleware
var getonly = require('./getonly');
app.use(getonly);

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


// local host
app.listen(3001, function() {
    console.log("Running Express");
});
