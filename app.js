var express = require('express');
var app = express();
//serve all files in public folder


app.set('port',(process.env.PORT || 3001));

app.use(express.static('public'));


var cities = require('./routes/cities');
app.use('/cities', cities);

// local host
app.listen(app.get('port'), function() {
    console.log("Running Express on port", app.get('port'));
});

// use getonly middleware
//var getonly = require('./getonly');
//app.use(getonly);


// create function to filter by city name
//function citySearch (keyword) {
  // i case sensitive matching
//  var regexp = RegExp(keyword, 'i');
//  var result = cities.filter(function (city){
//    return city.match(regexp);
//  });

//  return result;
//}
