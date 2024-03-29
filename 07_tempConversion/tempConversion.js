const convertToCelsius = function(temp) {
  let celsius = 0;
  celsius = (temp - 32) * (5/9);
  celsius = +celsius.toFixed(1)
  // if(celsius === "0.0"){
  //   celsius = 0;
  // }
  return celsius;
};

const convertToFahrenheit = function(temp) {
  let fahrenheit = 0;
  fahrenheit = temp * (9/5) + 32;
  fahrenheit = +fahrenheit.toFixed(1)
  // if(fahrenheit === "0.0"){
  //   fahrenheit = 0;
  // }
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
