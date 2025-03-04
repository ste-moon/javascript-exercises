const convertToCelsius = function(f) {
   let celcius = (f - 32) * (5 / 9);
   return Math.round(celcius * 10) / 10;
};

const convertToFahrenheit = function(c) {
let fahrenheit = (( 9 / 5) * c) + 32;
return Math.round(fahrenheit * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
